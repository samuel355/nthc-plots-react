import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({title}) => {
  return (
    <div>
        <div className="breadcrumb-area jarallax breadcrumb-back-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">{title}</h1>
                <ul className="page-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb