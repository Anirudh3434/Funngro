import React from 'react'
import funngroInfo from '../Constant';

function TrustedPartner() {
    return (
        <div className='Trusted-container'>
        <h1>Trusted Partner</h1>
        <p>Hundreds of companies and partners working with Funngro to find smart talent.</p>
  
      <div className='Trusted-container-direction'>
      <div className='Trusted-card'>
          <div className='Trusted-Title'>
            <h1>Companies</h1>
          </div>
          <div className='Trusted-company'>
            
              {funngroInfo.trustedBy.companies.map((company, index) => (
                 <img src={company} alt="no image" />
              ))}
           
          </div>
        </div>
  
        <div className='Trusted-card'>
          <div className='Trusted-Title'>
            <h1>Partners</h1>
          </div>
          <div className='Trusted-company'>
           
              {funngroInfo.trustedBy.partners.map((partner, index) => (
                 <img src={partner} alt="no image" />
              ))}
            
          </div>
        </div>

        <div className='Trusted-card'>
          <div className='Trusted-Title'>
            <h1>Companies</h1>
          </div>
          <div className='Trusted-company'>
           
              {funngroInfo.trustedBy.companies.map((company, index) => (
                 <img src={company} alt="" />
              ))}
            
          </div>
        </div>
      </div>
      </div>
    );
    
}

export default TrustedPartner
