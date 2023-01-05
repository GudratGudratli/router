import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Main from '../../Components/Home/Main'
import Text from '../../Components/Home/Text'
import { Helmet } from 'react-helmet'
export default function Home() {
  return (

    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Navbar />

      <Main />
      <Text />
      
      <Footer />
    </>
  )
}