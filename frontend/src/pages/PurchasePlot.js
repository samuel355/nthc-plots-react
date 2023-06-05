import React from 'react'
import Navbar from '../components/Navbar'

import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer';
import Leaflet from '../components/Leaflet';

const PurchasePlot = () => {
  return (
    <div>
        <Navbar />
        <BreadCrumb title="Purchase Plot" />
        <div className="container">
          <div className="row">
              <div className="col-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem'}}>
                  <p style={{width: '1rem', height: '1rem', backgroundColor: '#008000', marginLeft: '1rem'}}> </p>
                  <p style={{marginLeft: '1rem'}}>Available</p>
                  <p style={{width: '1rem', height: '1rem', backgroundColor: '#000000', marginLeft: '1rem'}}> </p>
                  <p style={{marginLeft: '1rem'}}>Reserved</p>
                  <p style={{width: '1rem', height: '1rem', backgroundColor: '#ff0000', marginLeft: '1rem'}}> </p>
                  <p style={{marginLeft: '1rem'}}>Sold</p>
              </div>
            </div>
          <div className="row">
            <div className="col-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{width: '100%', height: '625px', backgroundColor: 'grey', marginTop: '1rem'}}>
                <Leaflet />
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default PurchasePlot