// import Navbar from '@/.next/components/Navbar'
// import Navbar from '/Navbar'
// import Footer from '@/pages/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './footer'
import Navbar from './Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Navbar/>
   <Component {...pageProps} />
   <Footer/>  
   </>
  )

}
