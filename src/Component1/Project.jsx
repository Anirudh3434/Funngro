import React from 'react';
import funngroInfo from '../Constant';


const Project = () => (
    <div className="container">
        <h1>Project Ideas</h1>
        <p>
            Cost-effective, innovative, and timely delivery of projects by the smartest talent on the planet (Teenlancers).
        </p>
        <div className="categories">
            {Object.keys(funngroInfo.services).map((key) => {
                const service = funngroInfo.services[key];
                return (
                    <div key={key} className="service-box">
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-price">Price: {service.price || service.priceRange}</p>
                        <p className="service-description">{service.description}</p>
                        <button className="service-cta">{service.callToAction}</button>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Project;
