import React from 'react'
import Navbar from '../components/Navbar'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <Navbar />
        <BreadCrumb title="Login" />

        <div className='row' style={{display: 'flex', justifyContent: 'center',}}>
            <div className="col-lg-5 mt-4">
                <form className="contact-form-wrap contact-form-bg">
                    <h4 className='text-center'> Login to Your Account</h4>
                    <div className="rld-single-input">
                        <input type="email" placeholder="Enter Email" />
                    </div>
                    <div className="rld-single-input mt-4">
                        <input type="password" placeholder="Enter Password" />
                    </div>
                    <p className='pull-right'> <Link to={'forgot-password'}>Forgot Password? </Link></p>
                    <div className="btn-wrap text-center">
                        <button className="btn btn-yellow">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login