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
                >About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a quisquam magni nostrum qui, perferendis autem asperiores necessitatibus sit ea debitis optio sed, est iusto exercitationem saepe dolor natus earum?</p>
                <Link className="btn-view-all-2" to='/'>
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