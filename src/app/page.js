import { LandingPage } from '@/components/LandingPage';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export default async function Home() {
  return (
    <>
      <LandingPage config={serverRuntimeConfig} />
    </>
  )
}
