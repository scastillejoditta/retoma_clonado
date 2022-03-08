import Head from 'next/head'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

import "../styles/globals.css";
import {useEffect} from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import * as gtag from '../lib/gtag'

const Layout = dynamic(
  () => import('../components/Layout'),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
  <>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    />
    <Script
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
    <Script dangerouslySetInnerHTML={{__html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2860052,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}} />
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
      <meta name="description" content="Retoma es una red de conversación que busca entender las agendas de los jóvenes que participaron del Paro Nacional 2021, posicionarlas en la opinión pública e incidir en las agendas políticas de los candidatos para las elecciones del 2022."></meta>
      <meta name="author" content="MUTANTE - https://www.mutante.org/sobre-mutante/quienes-somos" />
      <meta name="keywords" content="Movilización, Transformación social, Incidencia política, Elecciones Colombia, Prosperidad social" />
      <meta name="copyright" content="MUTANTE" />
      <meta name="facebook-domain-verification" content="j208yo7j1jh7f7vi0drlh7wk9mwth5" />
      <title>Retoma :: Red Informativa para la Toma de decisiones Democráticas</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
