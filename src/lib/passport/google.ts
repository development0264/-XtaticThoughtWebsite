import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import appConfig from "../appConfig";
import userStore from "../../../__mocks__/UserStore";

const strategy = new GoogleStrategy(
  appConfig.google,
  (accessToken, refreshToken, googleProfile, cb) => {
    // Right now, the user's Github profile is supplied as the user
    // record. In a production-quality application, the Github profile should
    // be associated with an app-specific user record in app persistence,
    // which allows for account linking and authentication with other identity providers.

    // Upsert user here
    //let x = [accessToken, refreshToken, googleProfile, cb];

    const foundUser = userStore.GetUser(googleProfile.id, null, "google");

    console.log("find user in UserStore", foundUser);

    // see https://github.com/jaredhanson/passport-github/blob/master/lib/strategy.js#L40
    // see https://gitlab.com/andycunn/canvass/blob/f3f03859b3de66f30d7703a4c5d2f44f7c724f67/api/app.js#L118
    // for an example
    cb(null, foundUser);
  }
);

export default strategy;
