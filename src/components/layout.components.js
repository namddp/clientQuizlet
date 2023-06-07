import React from 'react'
import Header from './header.components'
import Footer from './footer.components'

export default function Layout({children}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
