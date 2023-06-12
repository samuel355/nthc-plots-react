import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/img/city/2.png'
import Navbar from '../components/Navbar'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb title="About Us" />
      <div className="about-area pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="section-title mb-lg-0">
                <h2
                  className="title"
                > About Us</h2>
                <p>Welcome to the Malburry experience. Choose from from a limited offer of prime lands in the heart of the garden city kumasi , Ghana. </p>
                <p>These lots or plots have been designed to be developed into apartments and townhouses to maximize the value and deliver returns on investments. </p>
                <p>This very limited offer is brought to you by land and homes consult and it’s partners , total lands services , DL group and Kountryman Holding Group.</p>
                <h2
                  className="title"
                > The Offer</h2>
                <p>Prime lands located in the city centre at Nwamase, Kwadaso. A 25 minutes drive from the Newly built Kumasi International Airport. 15 minutes drive from the Kumasi Mall and other prime areas such as Asokwa and Ahodwo. 
                  All necessary documentations are facilitated by our team of experts at Lands and homes consult at an extra fee. </p>
              </div>
            </div>
            <div className="col-lg-7">
              <img src={Image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About