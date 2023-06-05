import React from 'react'
import apartImg from '../assets/img/city/1.png'

const ApartmentSlider = () => {
  return (
    <div className="apartments-area pd-top-100">
        <div className="container">
          <div className="apartments-slider">

              <div className="item">
                <div className="row justify-content-center">
                  <div className="col-lg-6 offset-lg-2">
                    <div className="thumb">
                      <h2 className="title">Item Title</h2>
                      <img src={apartImg} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-3 align-self-center">
                    <div className="details">
                      <h2 className="title">item Title</h2>
                      <h4 className="mb-0">
                        <del>748</del>
                      </h4>
                      <h3>467</h3>
                      
                        <div>
                          <h5 className="sub-title">title</h5>
                          <span>
                            <i className="fa fa-pencil" />
                            subtitle
                          </span>
                        </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
  )
}

export default ApartmentSlider