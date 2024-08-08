import React from 'react';
import funngroInfo from '../Constant';

function Project() {
    return (
        <div>
            <div className="container">
                <h1>Project Categories</h1>
                <p>
                    Hundreds of live projects in each category. Register for categories of your
                    choice in the Funngro App and start working with companies.
                </p>
                <div className="categories">
                    {funngroInfo.projectCategories.map((category) => (
                        <div key={category.name} className="category">
                            <div className="icon">{category.icon}</div>
                            <div className="title">{category.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;
