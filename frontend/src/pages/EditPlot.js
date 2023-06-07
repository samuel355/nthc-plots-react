import React from 'react'
import Navbar from '../components/Navbar'
import BreadCrumb from '../components/BreadCrumb'
import ToastMesg from '../components/ToastMesg'

const EditPlot = () => {
  return (
    <>
        <Navbar />
        <BreadCrumb title="Edit Plot" />
        <ToastMesg />
    </>
  )
}

export default EditPlot