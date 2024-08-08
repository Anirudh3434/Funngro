import React from 'react';
import funngroInfo from '../Constant';

function HappyCustomer() {
    return (
        <div className="container" style={{backgroundColor: '#121e2c'}}>
            <h1>Happy Funngro Members</h1>
            <p>
                Hundreds of companies have worked with Talented Teens on Funngro. Read on for their views
            </p>
            <div className="categories">
                {
                    funngroInfo.testimonials.map((element, index) => (
                        <div key={index} className="service-box">
                            {element.image && <img src={element.image} alt={element.name} className="testimonial-image" />}
                            <h2 className="service-title">{element.name}</h2>
                            <p className="service-company">Company: {element.company}</p>
                            <p className="service-description">{element.testimonial}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HappyCustomer;
