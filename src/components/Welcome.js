import React from 'react';

import WelcomeThumbnail from './../assets/imgs/welcome-thumbnail.jpg';

export default function WelcomeSection(){
    return(
        <div className="welcome-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="welcomethumbnail">
                            <img src={WelcomeThumbnail} alt="" />    
                        </div>   
                    </div>
                    <div className="col-md-6">
                        <div className="title-section">
                            <h5>about us</h5>
                            <h3>Your renovation, our innovation</h3>
                            <p>Military Veterans Remodeling is a locally operated, women and veteran-owned business serving homeowners, business and national accounts in the Houston, TX area. We specialize in quality painting services for interior painting, exterior painting, cabinet refinishing, residential and commercial. We also offer drywall and cleaning services. Our service areas include Montgomery, Spring, Kenwood, Cypress, Katy, Sugarland, Conroe, Magnolia, and Tomball, TX.`</p>
                            <div className="more">
                                <a href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}