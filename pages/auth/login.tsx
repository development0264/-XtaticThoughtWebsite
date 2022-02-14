import React from "react";
import Button from '@material-ui/core/Button';

const Login = () => (
  <main>
    <input type="text" />
    <p>Log in to use</p>
    <p>
      <a href="/api/auth/github">Sign in with github</a>
    </p>
    <p>
      <a href="/api/auth/google">Sign in with google</a>
    </p>
    <p>Please login!</p>
    <form method="post" action="/api/auth/callback/local">
      <input type="text" name="username" />
      <input type="password" name="password" />
        <Button variant="contained" color="primary" type="submit" value="submit">
            Submit
        </Button>
    </form>
  </main>
);

export default Login;
