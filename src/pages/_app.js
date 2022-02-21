import Layout from '../components/Layout'
import Script from 'next/script'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <title>My page title</title>
        <meta name="description" content="Retoma es una red de conversación que busca entender las agendas de los jóvenes que participaron del Paro Nacional 2021, posicionarlas en la opinión pública e incidir en las agendas políticas de los candidatos para las elecciones del 2022."></meta>
        <meta name="author" content="MUTANTE - https://www.mutante.org/sobre-mutante/quienes-somos" />
        <meta name="keywords" content="Movilización, Transformación social, Incidencia política, Elecciones Colombia, Prosperidad social" />
        <meta name="copyright" content="MUTANTE" />
        <title>Retoma :: Red Informativa para la Toma de decisiones Democráticas</title>
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-139327370-1"></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-139327370-1');
          `,
        }}
      />
      <Script dangerouslySetInnerHTML={{__html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2687476,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}} />
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
