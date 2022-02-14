import Router from 'next/router'
import {NextApiResponse, NextPageContext} from 'next'

// @ts-ignore
export interface NextApiResponseExtended extends NextApiResponse {
  redirect: Function;
}

export default (context: NextPageContext, target: string) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target)
  }
}
