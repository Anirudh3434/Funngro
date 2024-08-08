import React from 'react';
import funngroInfo from '../Constant';
import ceo from '../assets/ceo.jpg'


function Ceo() {
    return (
        <div className='container' style={{backgroundColor: '#121e2c'}}>

            
            <div style={{ display: 'flex', flexDirection: 'row',  }} className='work'>
                <div style={{ marginRight: '20px' , flex: 1}}>
                    <img src={ceo} alt="Illustration" style={{ maxWidth: '90%', borderRadius: '20px' }} />
                </div>
                
                <div style={{flex: 1}} className='work-content'>
                    <h2>{funngroInfo.aboutInfo.tagline}</h2>
                    <h3>{funngroInfo.aboutInfo.mission}</h3>
                    <h3>{funngroInfo.aboutInfo.vision}</h3>

                {
                    funngroInfo.aboutInfo.founders.map((element)=>(
                           <div>
                            <h4>{element.name}</h4>
                            <p>{element.position}</p>
                           </div>

                    ))
                }
                </div>
            </div>
            
         
        </div>
    );
}

export default Ceo;
