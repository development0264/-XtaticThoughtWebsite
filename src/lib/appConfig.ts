import { StrategyOptions as githubStrategyOptions } from "passport-github";

export interface AppConfig {
  isDevelopment: boolean;
  hostingURL: string;
  github: githubStrategyOptions;
  google: githubStrategyOptions;
}

const getOAuthUrls: (
  hostName: string,
  app: string
) => { callbackURL: string } = (hostName: string, app: string) => ({
  // Alternatively, use `[app].ts` filenames for paramaterized urls
  callbackURL: `${hostName}/api/auth/callback/${app}`
});

const isDevelopment = process.env.NODE_ENV !== "production";
const hostingURL = process.env.HOSTING_URL || "http://localhost:3000";

const appConfig: AppConfig = {
  isDevelopment,
  hostingURL,
  github: {
    passReqToCallback: false,
    clientID: process.env.GITHUB_CLIENTID as string,
    clientSecret: process.env.GITHUB_CLIENTSECRET as string,
    ...getOAuthUrls(hostingURL, "github"),
    scope: "user:email"
  },
  google: {
    passReqToCallback: false,
    clientID: process.env.GOOGLE_CLIENTID as string,
    clientSecret: process.env.GOOGLE_CLIENTSECRET as string,
    ...getOAuthUrls(hostingURL, "google"),
    scope: ["email", "profile"]
  }
};

export default appConfig;
