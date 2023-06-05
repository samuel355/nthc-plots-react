import React from 'react'
import Client1 from '../assets/img/client/1.png'
import Client2 from '../assets/img/client/2.png'
import Client3 from '../assets/img/client/3.png'

const Client = () => {
  return (
    <div className={"client-area "}>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              Our Partners
            </h2>
          </div>
          <div className="row client-img text-center">
            <div className="col-md-4 col-sm-12">
                <img
                className="clr-img clr-img1"
                src={Client1}
                alt="client"
                />
            </div>
            <div className="col-md-4 col-sm-12">
                <img
                className="clr-img clr-img2"
                src={Client2}
                alt="client"
                />
            </div>
            <div className="col-md-4 col-sm-12">
                 <img
                className="clr-img clr-img3"
                src={Client3}
                alt="client"
                />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Client