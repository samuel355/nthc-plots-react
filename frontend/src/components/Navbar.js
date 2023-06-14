import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { logout } from '../redux/features/UserSlice'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
  const loc = useLocation();
  const dispatch = useDispatch()
  const {user} = useSelector((state) => ({...state.user}))

  return (
    <div>
        <div className="navbar-area">
          <nav className="navbar navbar-area navbar-expand-lg bg-light">
            <div className="container nav-container">
              <div className="responsive-mobile-menu">
                <button
                  className="menu toggle-btn d-block d-lg-none"
                  data-toggle="collapse"
                  data-target="#realdeal_main_menu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-left" />
                  <span className="icon-right" />
                </button>
              </div>
              <div className="logo readeal-top">
                <Link to="/">
                  {/* <img src={logo} alt="logo" /> */}
                  <h4 style={{fontSize: '24px', fontWeight: 800, color: 'black'}}>N.T.H.C.</h4>
                </Link>
              </div>
              <div className="nav-right-part nav-right-part-mobile">
                {
                  !user ? (
                    <Link className="btn btn-yellow text-center" to="/login">
                      LOGIN
                    </Link>
                  ) : (
                      <Link onClick={() => dispatch(logout())}  className="btn btn-yellow text-center">
                        LOGOUT
                      </Link>
                  )
                }
                
              </div>
              <div className="collapse navbar-collapse" id="realdeal_main_menu">
                <ul className="navbar-nav menu-open readeal-top">
                  <li>
                    <Link style={{color: loc?.pathname === '/' ? '#fda94f': 'black'}} to="/">Home</Link>
                  </li>
                  <li>
                    <Link style={{color: loc?.pathname === '/purchase' ? '#fda94f': 'black'}} to="/purchase">Purchase Plot</Link>
                  </li>
                  <li>
                    <Link style={{color: loc?.pathname === '/about-us' ? '#fda94f': 'black'}} to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link style={{color: loc?.pathname === '/contact' ? '#fda94f': 'black'}} to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="nav-right-part nav-right-part-desktop readeal-top align-items-center">
                {
                  !user ? (
                    <Link className="btn btn-yellow text-center" to="/login">
                      LOGIN
                    </Link>
                  ) : (
                      <Link onClick={() => dispatch(logout())}  className="btn btn-yellow text-center">
                        LOGOUT
                      </Link>
                  )
                }
              </div>
            </div>
          </nav>
        </div>
    </div>
  )
}

export default Navbar