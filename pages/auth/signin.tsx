import React from "react";
import SignIn from "../../src/components/SignIn";

export default function SignInIndex() {
  console.log(
    "NEXT_PUBLIC_DOES_THIS_WORK",
    process.env.NEXT_PUBLIC_DOES_THIS_WORK
  );
  console.log("GITHUB_CLIENTID", process.env.GITHUB_CLIENTID);
  return <SignIn />;
}
