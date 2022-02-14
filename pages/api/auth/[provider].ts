import { NextApiResponse, NextApiRequest } from "next";
import withPassport, { passport } from "../../../src/hocs/withPassport";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { provider } = req.query;
  if (!provider) {
    return { statusCode: 404 };
  }

  console.log("handler auth/[provider]");

  passport.authenticate(provider)(req, res, (...args) => {
    console.log("passport authenticated", args);
    return true;
  });
};

export default withPassport(handler);
