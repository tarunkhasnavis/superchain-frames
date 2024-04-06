import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { abi } from './constants/governanceTokenAbi'
import { DelegateScreen } from './screens/Delegate'
import { SuccessScreen } from './screens/Success'
import { addressSchema } from './schemas/addressSchema';
import { SomethingWentWrong } from "./screens/SomethingWentWrong";
import { delegates } from './constants/delegates'
 // Import your address schema
// import { neynar } from 'frog/hubs'

export const app = new Frog({
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/delegation/:address', (c) => {
  const safeParseResult = addressSchema.safeParse(c.req.param("address"));

  if (safeParseResult.success === false || (safeParseResult.data !== "0x5e349eca2dc61aBCd9dD99Ce94d04136151a09Ee" && safeParseResult.data !== "0xF4B0556B9B6F53E00A1FDD2b0478Ce841991D8fA")) {
    return c.res({
      image: <SomethingWentWrong />,
      title: "Delegate Frame",
    });
  }

  const delegateAddress = safeParseResult.data

  return c.res({
    image: <DelegateScreen address={delegateAddress} name={delegates[delegateAddress].name} image={delegates[delegateAddress].image} statement={delegates[delegateAddress].statement} />,
    intents: [
      <Button.Transaction target={`/delegate/${delegateAddress}`} action={`/delegate/${delegateAddress}/completed`}>Delegate</Button.Transaction>,
    ],
  })
})

app.frame('/delegate/:delegateAddress/completed', (c) => {
  const delegateAddress = c.req.param('delegateAddress')
  const { transactionId } = c
  const url = `https://optimistic.etherscan.io/tx/${transactionId}`;
  console.log(url);
  return c.res({
    image: (
      <SuccessScreen address={delegateAddress} name={delegates[delegateAddress].name} image={delegates[delegateAddress].image}/>
    ),
    intents: [
      <Button.Link href={url}>View Transaction</Button.Link>,
      <Button.Redirect location='https://vote.optimism.io/delegates'>Learn More</Button.Redirect>,
    ],
  })
})

app.transaction('/delegate/:delegateAddress', (c) => {
  const delegateAddress = c.req.param('delegateAddress')
  // Contract transaction response.
  return c.contract({
    abi,
    chainId: 'eip155:10',
    functionName: 'delegate',
    args: [delegateAddress as `0x${string}`],
    to: '0x4200000000000000000000000000000000000042',
  })
})

const isCloudflareWorker = typeof caches !== 'undefined'
if (isCloudflareWorker) {
  // @ts-expect-error - Static content manifest is injected by the build
  const manifest = await import('__STATIC_CONTENT_MANIFEST')
  const serveStaticOptions = { manifest, root: './' }
  app.use('/*', serveStatic(serveStaticOptions))
  devtools(app, { assetsPath: '/frog', serveStatic, serveStaticOptions })
} else {
  devtools(app, { serveStatic })
}

export default app
