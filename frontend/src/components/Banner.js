import React from 'react'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className="banner-area jarallax backImage">
        <div className="container">
        <div className="banner-inner-wrap">
            <div className="row">
            <div className="col-lg-10">
                <div className="banner-inner">
                <h5 className="sub-title">The Best Way To</h5>
                <h1 className="title">Find Your Perfect Home</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel eros quam. Sed sit amet dictum est</p>
                <div className="banner-btn-wrap">
                    <Link className="btn btn-yellow mr-2" to='/'>
                    DISCOVER MORE
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner