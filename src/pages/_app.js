import Layout from '../components/Layout'
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-139327370-1"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-139327370-1');
          `,
        }}
      />
    </Head>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
