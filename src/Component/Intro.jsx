import React from 'react'
import funngroInfo from '../Constant.js'
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { FaAppStore } from "react-icons/fa";
import SharkTank from '../assets/SharkTank.png'
import Dock from './Dock.jsx';

function Intro() {
    return (
      <div className='intro-container'>
      <div className='text-container'>
          <div className='Content-Area' style={{margin: '50px'}}>
              <h1 style={{fontSize: '60px'}}>{funngroInfo.PageTitle}</h1>
              <p>{funngroInfo.description1}</p>
              <p>{funngroInfo.description2}</p>
              <div className='Download'>
                  <span className='Down'>Download </span>
                  <button className='DownloadLink'>
                      <IoLogoGooglePlaystore />
                      <span>{funngroInfo.downloadLinks.googlePlay}</span>
                  </button>
                  <button className='DownloadLink'>
                      <FaAppStore />
                      
                      <span>{funngroInfo.downloadLinks.appStore}</span>
                  </button>
              </div>
          </div>
      </div>
      <div className='image-container'>
          <img src={SharkTank} alt="" />
      </div>
  </div>
    )
}

export default Intro
