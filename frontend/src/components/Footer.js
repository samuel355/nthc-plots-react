import React, { useState } from 'react'
import {toast} from 'react-toastify'
import apartImg from '../assets/img/feature/1.png'
import { useDispatch } from 'react-redux'
import { subscribeTNL } from '../redux/features/ContactUsSlice'

const Footer = () => {
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()
    if(email === ''){
      return toast.error("Please Enter you email address")
    }
    dispatch(subscribeTNL({email, toast}))

  }
  return (
    <footer className="footer-area style-two pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="subscribe-area" style={{marginTop: '0.01rem'}}>
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 text-center">
                <h2>Get Update</h2>
                <p>
                  Subscribe to our weekly Newsletter and receive discounted offers of our services directly into your inbox{" "}
                </p>
                <form action="" onSubmit={onFormSubmit}>
                  <div>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder="Your email Address" />
                    <input type="submit" value='Submit' style={{marginTop: '10px', padding: 8, backgroundColor: '#fda94f', cursor: 'pointer', color: 'white'}} />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-sm-4">
                <a className="footer-logo" href="#">
                  <img src={apartImg} alt="" />
                </a>
              </div>
              <div className="col-sm-8">
                <div className="footer-social text-sm-right">
                  <span>FOLLOW US</span>
                  <ul className="social-icon">
                    <li>
                        <a href="" target="_blank">
                          <i className="fa fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                          <i className="fa fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                          <i className="fa fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                          <i className="fa fa-twitter" />
                        </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">
                    Get IN TOUCH
                  </h4>
                  <ul>
                    <li><a href="tel:2336788972">+233 678 8972/(233) 0322008282</a></li>
                    <li><a href="">info@landandhomesconsult.com</a></li>
                    <li><a href="">Kumasi/Accra/Canada</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">Quick Links</h4>
                  <ul>
                    <li><a href="">Purchase Plot</a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <form className="widget widget-subscribe" onSubmit={onFormSubmit}>
                  <p>Subscribe to our weekly newsletter</p>
                  <div className="rld-single-input">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="yourname@email.com" />
                  </div>
                  <button className="btn btn-yellow w-100">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div
            className="copy-right text-center"
          >All Rights Reserved</div>
        </div>
      </footer>
  )
}

export default Footer