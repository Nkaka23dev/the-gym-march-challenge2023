import React from 'react'
import Footer from './Footer'
import MobFooter from './MobFooter'

export default function Layout({children}) {
  return (
    <section>
    {children}
    <Footer/>
    <MobFooter/>
    </section>
  )
}
