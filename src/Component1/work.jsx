import React from 'react';
import funngroInfo from '../Constant';
import work from '../assets/work.svg'


function Work() {
    return (
        <div className='container'>
            <h1>{funngroInfo.whyWorkWithTeens.title}</h1>
            <p style={{ fontSize: '15px' }}>{funngroInfo.whyWorkWithTeens.description}</p>
            
            <div style={{ display: 'flex', flexDirection: 'row',  }} className='work'>
                <div style={{ marginRight: '20px' , flex: 1}}>
                    <img src={work} alt="Illustration" style={{ maxWidth: '250%' }} />
                </div>
                
                <div style={{flex: 1}} className='work-content'>
                    {funngroInfo.whyWorkWithTeens.workingWithTeamIllustration.map((point, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <h2>{point.title}</h2>
                            <p style={{ fontSize: '15px' }}>{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div style={{ marginTop: '20px' }}>
                <button className='start1'>
                    {funngroInfo.whyWorkWithTeens.actionButton}
                </button>
            </div>
        </div>
    );
}

export default Work;
