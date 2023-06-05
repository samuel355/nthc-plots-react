import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import About from './About'
import Client from '../components/Client'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Client/>
      <Footer/>
    </>
    
  )
}

export default Home