import Layout from '@/components/Layout'
import '@/styles/globals.css'
import localFont from '@next/font/local'

export default function App({ Component, pageProps }) {
  return <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
}
