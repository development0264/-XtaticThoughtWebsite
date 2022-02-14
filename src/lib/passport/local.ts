import { Strategy as LocalStrategy } from "passport-local";
import userStore from "../../../__mocks__/UserStore";

const strategy = new LocalStrategy(function(username, password, done) {
  const foundUser = userStore.GetUser(username, password, "local");

  console.log("find user in UserStore", foundUser);

  return done(null, foundUser);
});

export default strategy;
