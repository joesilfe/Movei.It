import Head from 'next/head'
import { useRouter } from 'next/router';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const { pathname } = router

  return (
    <>
      <Head>
        <meta name='viewport' content=' maximum-scale=5, minimum-scale=1, initial-scale=1.0, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
        <link rel="canonical" href={`https://moveit-joesilfe.vercel.app${pathname}`} />
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp