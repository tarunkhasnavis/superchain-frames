import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'
import { abi } from '../../delegate-frame/src/constants/governanceTokenAbi.js'
import { z } from 'zod';
// import { getCastIntentLink } from './getCastIntentLink.js';

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/', (c) => {
  return c.res({
    action: "/isDelegate",
    image: (
      <div
        style={{
          alignItems: 'center',
          background:'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {'Are you a Delegate?'}
        </div>
      </div>
    ),
    intents: [
      <Button>I am a delegate</Button>,
    ],
  })
})

app.frame('/isDelegate', (c) => {
  const { status, frameData} = c;

  if (status !== "response" || !frameData) {
    return c.res({
      action: "/",
      image: <div>{"Something went wrong"}</div>,
      intents: [<Button.Reset>Try Again</Button.Reset>],
      title: "Roastcaster",
    });
  }

  // logic here or getting the address

  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {'Share a Frame for Delegation'}
        </div>
      </div>
    ),
    intents: [
      <Button.Link href={'http://localhost:5173/api/dev/share/0xC009EC1DE31478d24f01Df3F41E437AAb96445b6'}>Share Delegation Frame</Button.Link>,
    ],
  })
})

app.frame('/share/:address', (c) => {
  const safeParseResult = z.coerce.number().safeParse(c.req.param("address"));

  if (safeParseResult.success === false) {
    return c.res({
      action: "/",
      image: (
        <div>
          {'Something went Wrong'}
        </div>
      ),
      intents: [<Button.Reset>Try Again</Button.Reset>],
      title: "Roastcaster",
    });
  }

  return c.res({
    action: "/finish",
    image: (
      <div
        style={{
          alignItems: 'center',
          background: 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {'Delegate your OP to me'}
        </div>
      </div>
    ),
    intents: [
      <Button.Transaction target="/delegate/${}">Delegate</Button.Transaction>,
      <Button.Redirect location='https://vote.optimism.io/delegates'>Learn More</Button.Redirect>,
    ],
  })
})

app.frame('/finish', (c) => {
  const { transactionId } = c
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        Transaction ID: {transactionId}
      </div>
    )
  })
})

app.transaction('/delegate', (c) => {
  // Contract transaction response.
  return c.contract({
    abi,
    chainId: 'eip155:10',
    functionName: 'delegate',
    args: ['0xC009EC1DE31478d24f01Df3F41E437AAb96445b6'],
    to: '0x4200000000000000000000000000000000000042',
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
