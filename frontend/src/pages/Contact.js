import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
        <Navbar />
        <BreadCrumb title='Contact Us' />
        <div className="contact-area pd-top-100 pd-bottom-65">
            <div className="container">
                <div className="row">
                    <h1 className="title text-center">Contact Us</h1>
                    <div className="col-md-12">
                        <p>Contact our team to take you through our offering. You are sure to get all your questions answered. </p>
                    </div>
                </div>
            <div className="row mt-3">
                <div className="col-lg-4">
                    <form className="contact-form-wrap contact-form-bg">
                        <h4>Contact Now</h4>
                        <div className="rld-single-input">
                        <input type="text" placeholder="Name" />
                        </div>
                        <div className="rld-single-input">
                        <input type="text" placeholder="Phone" />
                        </div>
                        <div className="rld-single-input">
                        <input type="text" placeholder="Phone" />
                        </div>
                        <div className="rld-single-input">
                        <textarea rows={10} placeholder="Message" defaultValue={""} />
                        </div>
                        <div className="btn-wrap text-center">
                        <button className="btn btn-yellow">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-8">
                    <div className="contact-page-map">
                        <iframe
                        className="w-100"
                        src="https://maps.google.com/maps?q=dichemso&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        style={{ border: 0 }}
                        allowFullScreen
                        />
                    </div>
                </div>
                
            </div>
            <div className="row pd-top-92">
                <div className="col-xl-3 col-sm-6">
                    <div className="single-contact-info">
                        <p>
                        <i className="fa fa-phone" />
                        Call Us:
                        </p>
                        <h5>+233 (0) 20 073 7032  </h5>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="single-contact-info">
                        <p>
                        <i className="fa fa-fax" />
                        Fax:
                        </p>
                        <h5>0322 008 282</h5>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="single-contact-info">
                        <p>
                        <i className="fa fa-envelope" />
                        Have any Question?
                        </p>
                        <h6>info@landandhomesconsult.com</h6>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="single-contact-info">
                        <p>
                        <i className="fa fa-phone" />
                        Address
                        </p>
                        <h6>Dichemso - Kumasi Ghana</h6>
                        <h6>CA 95046, Canada</h6>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact