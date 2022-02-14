import { NextApiRequest } from "next";
import { removeTokenCookie } from "../../../src/lib/authCookie";
import withPassport from "../../../src/hocs/withPassport";
import { NextApiResponseExtended } from "../../../src/lib/redirect";

const handler = (_req: NextApiRequest, res: NextApiResponseExtended) => {
  removeTokenCookie(res);

  console.log("handler auth/logout");

  return res.redirect("/");
};

export default withPassport(handler);
