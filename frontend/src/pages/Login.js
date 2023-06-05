import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom';

import { toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/features/UserSlice'
import {useNavigate} from 'react-router-dom'
import ToastMesg from '../components/ToastMesg';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, loading, error} = useSelector((state) => ({...state.user}))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let formValue = {email, password}

    const loginHandler = (e) => {
        e.preventDefault()
        if(email === ''){
            return toast.error('Please enter your email address')
        }
        if(password === ''){
            return toast.error('Please enter your password')
        }
        dispatch(login({formValue, navigate, toast}))
    }

    useEffect(() =>{
        if(error){
            toast.error(error);
        }
    }, [error])

    useEffect(() =>{
        if(user){
            navigate('/')
        }
    }, [user, navigate])

  return (
    <>
        <Navbar />
        <BreadCrumb title="Login" />
        <ToastMesg />

        <div className='row' style={{display: 'flex', justifyContent: 'center',}}>
            {/* {loading && (<i className="fa fa-spinner m-auto mb-4 text-3xl spinner"></i>)} */}
            <div className="col-lg-5 mt-4">
                <form className="contact-form-wrap contact-form-bg" onSubmit={loginHandler}>
                    <h4 className='text-center'> Login to Your Account</h4>
                    <div className="rld-single-input">
                        <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                    </div>
                    <div className="rld-single-input mt-4">
                        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    </div>
                    <p className='pull-right'> <Link to={'forgot-password'}>Forgot Password? </Link></p>
                    <div className="btn-wrap text-center">
                        <button type='submit' disabled={loading ? true : false}  className="btn btn-yellow">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login