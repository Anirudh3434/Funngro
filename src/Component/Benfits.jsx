import React from 'react';
import funngroInfo from '../Constant.js'; 

function Benfits() {
  return (
    <div className='Benfit-container'>
      <div className='Benfit-Title'>
        <h1>Why Work in Your Teens?</h1>
      </div>
      <div className='Benfit-subTitle'>
        <h3>
          Warren Buffet, Bill Gates, Steve Jobs, all started working in their teens. Do you need a better reason?
        </h3>
      </div>
      <div className='Benfit-list'>
        {funngroInfo.benefits.map((benefit) => {
          const IconComponent = benefit.icon;
          return (
            <div key={benefit.id} className='benefit-cards'>
              <div className='benefit-icon'>
                <IconComponent />
              </div>
              <div className='benefit-content'>
                <strong>{benefit.label}</strong> {benefit.value} {/* Or use {benefit.content} if that is what you used */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Benfits;
