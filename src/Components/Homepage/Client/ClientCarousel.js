import React from "react";

const ClientCarousel = (props) =>{
    return(
      <div className="carousel-item">
      <div className="box col-lg-10 mx-auto">
         <div className="img_container">
            <div className="img-box">
               <div className="img_box-inner">
                  <img src={require("../../../assests/images/client.jpg")} alt=""/>
               </div>
            </div>
         </div>
         <div className="detail-box">
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