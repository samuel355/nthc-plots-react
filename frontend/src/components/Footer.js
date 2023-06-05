import React from 'react'
import apartImg from '../assets/img/feature/1.png'
const Footer = () => {
  return (
    <footer className="footer-area style-two pd-top-100 pd-bottom-70">
        <div className="container">
          <div className="subscribe-area" style={{marginTop: '0.01rem'}}>
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 text-center">
                <h2>Get Update</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean fringilla dui nibh, idhendrerit Suspendisse faucibus
                  nulla accumsan.{" "}
                </p>
                <div className="rld-single-input">
                  <input type="text" placeholder="Your email Address" />
                  <button className="btn">Submit Now</button>
                </div>
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
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">
                    Title
                  </h4>
                  <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">Title</h4>
                  <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="widget widget_nav_menu">
                  <h4 className="widget-title">follow us</h4>
                  <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <form className="widget widget-subscribe">
                  <div className="rld-single-input">
                    <input type="text" placeholder="Full Name" />
                  </div>
                  <div className="rld-single-input">
                    <input type="text" placeholder="Your@email.com" />
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