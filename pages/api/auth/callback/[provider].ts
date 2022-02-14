import { NextApiRequest } from "next";
import withPassport, { passport } from "../../../../src/hocs/withPassport";
import jwt from "jsonwebtoken";
import { setTokenCookie } from "../../../../src/lib/authCookie";
import { NextApiResponseExtended } from "../../../../src/lib/redirect";

const handler = async (req: NextApiRequest, res: NextApiResponseExtended) => {
  //console.log("req1",req)
  const { provider } = req.query;
  if (!provider) {
    return { statusCode: 404 };
  }

  console.log("handler auth/callback/[provider]");

  passport.authenticate(
    provider,
    {
      session: false
    },
    (err, user) => {
      if (err || user === false) {
        console.log("err", err, user);
        return res.redirect("/auth");
      }

      console.log("auth callback", err, user);

      // token = jwt.sign({ payload: session }, "shhhhh"); // symmetric
      // var privateKey =
      //   "-----BEGIN RSA PRIVATE KEY-----\n" +
      //   "MIICXQIBAAKBgQCAaW/WFUqdH7XKiliM1rhJ2Kewku9xdNEgEzYyB21Szs76at2j\n" +
      //   "3WKqjRKMrDz7KXpm8KeUDJy9VVl+Njm2hju5dsHewqXGUw2/pV8/b5I6uXMaq5Hi\n" +
      //   "P2hsXzXvJBUjMlU56VCefsLFLR3f90atY2EKh80eRZmbvBYA+uo38XnLZQIDAQAB\n" +
      //   "AoGAX7m51BbFK4JTC6y8PClo8ivfPgMbGjHiH44SzZK5zYw7wXPey+QiRE+r71AK\n" +
      //   "mZUfGRP3aKdKRN4WO78CoO1KIWu6xQ8x0BkoUh+r2iKS26aqXwtE8ggf3+yaH9tc\n" +
      //   "IftzFf4yi8a1pssNjiD5eIY/jwKCAoqW3B+do0IWgJHAB0ECQQDwD7iZ11XDA+8g\n" +
      //   "VlYAqCogUOg3jBm62ufhiCzTV9+Ypg5Us8JGLNuai7awz375+JO+aMbytWOfIxk2\n" +
      //   "wuKI+a1xAkEAiPAHfsDkjNRKr1pnwGl5YocIJxFsypHzSGymUh9q+dEeK32Hyvp1\n" +
      //   "xSqg4XDGgQzs1+wf9yBm7Ln2hKwfRcGTNQJBALlue1qiIgXsgQbKic4iF8A0ntth\n" +
      //   "ZfKW6yyj4nQx2W5xPnqhC/zm447iQvEapmtyXrVi++I4yMYA95X8Pb4ulpECQDq5\n" +
      //   "fO1duWWvkMu8YGwCj3yyXcurTFVe287+USE8ufqiNGcAMWDZofHJAy9K1sX3DgbX\n" +
      //   "CypGqfzxDwf8bHjUt9UCQQCV0iCjrczL/mXRVVy597jvZVpWP6RXwvpKFRjoBDTK\n" +
      //   "UjTHzTU+DR9xV5g3/Lb5IrXWpHJ2eca64klv6vQ5tasK\n" +
      //   "-----END RSA PRIVATE KEY-----";

      const privateKey = process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n');
      const publicKey =process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n');

        // "-----BEGIN PUBLIC KEY-----\n" +
        // "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCAaW/WFUqdH7XKiliM1rhJ2Kew\n" +
        // "ku9xdNEgEzYyB21Szs76at2j3WKqjRKMrDz7KXpm8KeUDJy9VVl+Njm2hju5dsHe\n" +
        // "wqXGUw2/pV8/b5I6uXMaq5HiP2hsXzXvJBUjMlU56VCefsLFLR3f90atY2EKh80e\n" +
        // "RZmbvBYA+uo38XnLZQIDAQAB\n" +
        // "-----END PUBLIC KEY-----";

      const token = jwt.sign(
        { ...user }, //, exp: Math.floor(Date.now() / 1000) - 30 },
        privateKey,
        {
          algorithm: "RS256",
          expiresIn: "1h"
        }
      );

      const verify = jwt.verify(token, publicKey, function(err, decoded) {
        console.log("decoded", decoded);
        console.log("err", err);
      });

      //console.log(privateKey);
      console.log(token);
      console.log(verify);

      setTokenCookie(res, token);
      // res.status(200).send({ done: true })

      return res.redirect("/");
    }
  )(req, res, (...args) => {
    console.log("???auth callback", args);
  });
};

export default withPassport(handler);
