import Head from 'next/head'
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content=' maximum-scale=5, minimum-scale=1, initial-scale=1.0, width=device-width, shrink-to-fit=no, viewport-fit=cover' />                            
        <link rel="canonical" href="https://moveit-joesilfe.vercel.app/"/>
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp