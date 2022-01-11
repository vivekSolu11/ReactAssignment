import React from "react";

const ClientCarousel = (props) =>{
    return(
      <div class="carousel-item">
      <div class="box col-lg-10 mx-auto">
         <div class="img_container">
            <div class="img-box">
               <div class="img_box-inner">
                  <img src={require("../../assests/images/client.jpg")} alt=""/>
               </div>
            </div>
         </div>
         <div class="detail-box">
            <h5>
              {props.name}
            </h5>
            <h6>
               {props.type}
            </h6>
            <p>
               {props.review}
            </p>
         </div>
      </div>
   </div>
    )
}

export default ClientCarousel;