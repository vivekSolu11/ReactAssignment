import React from 'react';
import './ArrivalSection.css'

const ArrivalSection = () => {
    return (
        
            <div className=" arrival_section">
                <div className=" row">
                    <div className=" col-lg-4 offset-lg-1">
                        <img src={require("./../../../assests/images/arrival-bg.png")} alt="banner" className='arrivalBanner' />
                    </div>
                    <div className='col-lg-6 newArrival'>
                  
                            <div className="heading_container remove_line_bt">
                                <h2>
                                    #NewArrivals
                                </h2>
                            </div>
                            <p >
                                Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                            </p>
                            <a href="/">
                                Shop Now
                            </a>
                        </div>
              
                </div>
            </div>
 
    )
}

export default ArrivalSection;