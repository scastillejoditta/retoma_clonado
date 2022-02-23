// import Layout from '../components/Layout'
import Head from 'next/head'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import '../styles/globals.css'

const Layout = dynamic(
  () => import('../components/Layout'),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <meta name="description" content="Retoma es una red de conversación que busca entender las agendas de los jóvenes que participaron del Paro Nacional 2021, posicionarlas en la opinión pública e incidir en las agendas políticas de los candidatos para las elecciones del 2022."></meta>
        <meta name="author" content="MUTANTE - https://www.mutante.org/sobre-mutante/quienes-somos" />
        <meta name="keywords" content="Movilización, Transformación social, Incidencia política, Elecciones Colombia, Prosperidad social" />
        <meta name="copyright" content="MUTANTE" />
        <title>Retoma :: Red Informativa para la Toma de decisiones Democráticas</title>
        <link rel="shortcut icon" href="/favicon.ico" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L2CMG1D4Q2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-L2CMG1D4Q2');
            `,
          }}
        />
      </Head>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
