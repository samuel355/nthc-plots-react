import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Image from '../assets/img/city/2.png'
import Client from '../components/Client'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="about-area pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="section-title mb-lg-0">
                <h2
                  className="title"
                >The Offer</h2>
                <p>Prime lands located in the city centre at Nwamase , Kwadaso. A 25 minutes drive from the Newly built Kumasi International Airport. 15 minutes drive from the Kumasi Mall and other prime areas such as Asokwa and Ahodwo. 
All necessary documentations are facilitated by our team of experts at Lands and homes consult at an extra fee. </p>
                <Link className="btn-view-all-2" to='/about-us'>
                  Read More<i className="la la-long-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Client/>
      <Footer/>
    </>
    
  )
}

export default Home