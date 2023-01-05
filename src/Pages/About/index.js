import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer'
import Aboutmain from '../../Components/Aboutmain'
import { Helmet } from 'react-helmet'


export default function About() {
  return (

    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <Navbar />

      <Aboutmain />
      
      <Footer />
    </>

  )
}