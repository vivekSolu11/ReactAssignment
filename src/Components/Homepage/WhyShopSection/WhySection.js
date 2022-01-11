import React from 'react';
import WhyShopCard from './whyShopCard';


const WhySection = () => {
   return (
      <section className="why_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Why Shop With Us
               </h2>
            </div>
            <div className="row">
               <WhyShopCard

                  heading="Fast Delivery"
                  body="variations of passages of Lorem Ipsum available"
               />
               <WhyShopCard
                  heading="Fast Delivery"
                  body="variations of passages of Lorem Ipsum available"
               />
               <WhyShopCard
                  heading="Fast Delivery"
                  body="variations of passages of Lorem Ipsum available"
               />
            </div>
         </div>
      </section>
   )
}

export default WhySection;