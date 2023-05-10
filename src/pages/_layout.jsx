import Background from '@/components/Background'
import Footer from '@/sections/Footer'
import Navbar from '@/sections/Navbar'
import React from 'react'

import "../scss/index.scss";
import { ToastContainer } from 'react-toastify';

export default function Layout({children}) {
  return (
    <div className='app'>
        <Navbar />
        <div className="content">{children}</div>
        <Footer/>
        <ToastContainer />
    </div>

  )
}
