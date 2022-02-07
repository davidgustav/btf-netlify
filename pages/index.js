import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bump This Fist</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/cropped-btf-site-icon-32.png" sizes="32x32"></link>
        <link rel="icon" href="/cropped-btf-site-icon-192.png" sizes="192x192"></link>
        <link rel="apple-touch-icon" href="/cropped-btf-site-icon-180.png"></link>
      </Head>

      <main>
        <img width="230" src="/cropped-btf-site-logo-2020-12-18-1" alt="Bump This Fist Logo" /> 
        <Header title="Bump This Fist" />
        <p className="description">
          Thanks for visiting. We've pivoted to a consultancy for now and will be removing the store until further notice.
        </p>
      </main>

      <Footer />
    </div>
  )
}
