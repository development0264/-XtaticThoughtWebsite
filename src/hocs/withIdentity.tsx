import React, { useContext } from "react";
import nextCookie from "next-cookies";
import redirect from "../lib/redirect";
import NextApp, { AppInitialProps, AppContext } from "next/app";
import { NextPageContext } from "next";
import jwt from "jsonwebtoken";

export interface UserIdentity {
  id: number;
  name: string;
  email: string;
  displayName: string;
}

export interface UserIdentityWrap {
  session: UserIdentity;
  token: any;
}
type IdentityProviderProps = Readonly<AppInitialProps> & {
  session: UserIdentityWrap;
};
const IdentityContext = React.createContext<UserIdentityWrap>(
  (null as unknown) as UserIdentityWrap
);

const loginPage = "/auth/signin";

export const redirectToLogin = (ctx: NextPageContext) => {
  if (
    (ctx && ctx.pathname === loginPage) ||
    (typeof window !== "undefined" && window.location.pathname === loginPage)
  ) {
    return;
  }

  redirect(ctx, loginPage);
};

const protectedPages = [];

// any is needed to use as JSX element
const withIdentity = (App: NextApp | any) => {
  return class IdentityProvider extends React.Component<IdentityProviderProps> {
    static displayName = `IdentityProvider(MyApp)`;

    static async getInitialProps(
      ctx: AppContext
    ): Promise<IdentityProviderProps> {
      // Get inner app's props
      let appProps: AppInitialProps;
      if (NextApp.getInitialProps) {
        appProps = await NextApp.getInitialProps(ctx);
      } else {
        appProps = { pageProps: {} };
      }

      console.log(ctx.ctx.asPath);

      if (!protectedPages.includes(ctx.ctx.asPath)) {
        return Promise.resolve({
          pageProps: null,
          session: (null as unknown) as UserIdentityWrap
        });
      }

      const { passportSession } = nextCookie(ctx.ctx);

      console.log("passportSession nextCookie", passportSession);

      // Redirect to login if page is protected but no session exists
      if (!passportSession) {
        redirectToLogin(ctx.ctx);
        return Promise.resolve({
          pageProps: null,
          session: (null as unknown) as any //UserIdentity
        });
      }

      const publicKey = process.env.JWT_PUBLIC_KEY.replace(/\\n/g, "\n");

      const user = jwt.verify(passportSession, publicKey, function(
        err,
        decoded
      ) {
        console.log("decoded", decoded);
        console.log("err", err);
        if (err) {
          return false;
        }
        return decoded;
      });

      console.log("user", user);

      // redirect to login if cookie exists but is empty
      if (!user) {
        redirectToLogin(ctx.ctx);
      }

      const session: UserIdentity = user;

      return {
        ...appProps,
        session: { session, token: passportSession }
      };
    }

    render() {
      const { session, ...appProps } = this.props;

      return (
        <IdentityContext.Provider value={session}>
          <App {...appProps} />
        </IdentityContext.Provider>
      );
    }
  };
};

export default withIdentity;

export const useIdentity = (): UserIdentityWrap => useContext(IdentityContext);
