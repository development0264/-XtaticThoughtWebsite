import {NextApiResponse, NextApiRequest} from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const funds = require('../../src/mock-data/dashboard')
  res.status(200).json({
    title: 'Funding VR/AR', amounts:
      funds.funding.reduce((res, f) => {
        const keyy = (new Date(f['properties']['last_funding_at'])).toISOString();
        // let keyy= Date.parse(f['properties']['last_funding_at'])
        if (Object.keys(res).indexOf(keyy) == -1) {
          res[keyy] = 0.0
        }
        ;
        res[keyy] = res[keyy] + Number(f.properties?.last_funding_total?.value || 0)
        console.log(Number(f.properties?.last_funding_total?.value || 0))
        return res;
      }, {})
  })
};

export default handler;
