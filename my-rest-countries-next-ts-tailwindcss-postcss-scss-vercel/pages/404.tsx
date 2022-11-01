import React from 'react'
// import s from "@assets/NotFound.page.css"
import { Header, NotFound, Footer } from '@components/index'

const FourZeroFour = () => {
  return (
    <div>
        <Header />

        <NotFound returnHome={true} />

        <Footer />
    </div>
  )
}

export default FourZeroFour