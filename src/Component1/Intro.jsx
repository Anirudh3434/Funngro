import React from 'react'
import funngroInfo from '../Constant.js'
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { FaAppStore } from "react-icons/fa";
import SharkTank from '../assets/SharkTank.png'


function Intro() {
    return (
      <div className='intro-container'>
      <div className='text-container'>
          <div className='Content-Area'>
              <h1>{funngroInfo.companyInfo.tagline}</h1>
              <p>{funngroInfo.companyInfo.valuePropositions}</p>
              <p>{funngroInfo.companyInfo.talentDescription}</p>
              <div className='Download'>
               
                  <button className='HireLink'>
                   
                   Hire TeenLancer
                    
                  </button>
                 
              </div>
             <div className='box-direction'>
             {
                funngroInfo.companyInfo.popularCategories.map((element)=>{
                        return(
                            <div className='box' key={element.id}>
                                 <span>{element}</span>
                            </div>
                        )
                })
              }
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
