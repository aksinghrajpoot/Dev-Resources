import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Hero from "../components/Hero/Hero";


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="theme-color" content="#000000" />
      <title>Dev Resources</title>
      <meta name="description" content="Welcome to developer's blog" />
      <link rel="icon" href="/images/site/favicon.png" />

    </Head>
    
    <Header />
    <Hero />
    <Component {...pageProps} />
  </>

}

export default MyApp
