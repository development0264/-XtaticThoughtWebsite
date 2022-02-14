import { NextApiResponse, NextApiRequest } from "next";
//import redirect from "micro-redirect";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      body: { username, password }
    } = req;
    console.log(username, password);

    res.end(`test`);
  } else {
    // Handle any other HTTP method
  }
};

export default handler;
