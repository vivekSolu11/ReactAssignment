import React from 'react';

const WhyShopCard = (props) => {
   return (
      <div className="col-md-4">
         <div className="box ">
            <div className="img-box">
               {props.svg}
            </div>
            <div className="detail-box">
               <h5>
                  {props.heading}
               </h5>
               <p>
                  {props.body}
               </p>
            </div>
         </div>
      </div>
   )
}

export default WhyShopCard;