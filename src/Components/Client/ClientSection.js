import axios from "axios";
import React, { useEffect, useState } from "react";
import ClientCarousel from "./ClientCarousel";

const ClientSection = () => {

    const [testimonial, setTestimonial] = useState([]);

    const testimonialApiCall = async () => {
        const response = await axios.get("http://localhost:3000/testimonial")
        console.log("data", response.data);
        setTestimonial(response.data);
    }

    useEffect(() => {
        testimonialApiCall();
    }, [])

    return(
      <section class="client_section layout_padding">
      <div class="container">
         <div class="heading_container heading_center">
            <h2>
               Customer's Testimonial
            </h2>
         </div>
         <div id="carouselExample3Controls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
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
                           Anna Trevor
                        </h5>
                        <h6>
                           Customer
                        </h6>
                        <p>
                           Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.
                        </p>
                     </div>
                  </div>
               </div>
              {testimonial.map((client,index)=>(
              <ClientCarousel key={index}
              name={client.name}
              type={client.type}
              review={client.review}/>
              ))}                
            </div>
            <div class="carousel_btn_box">
               <a class="carousel-control-prev" href="#carouselExample3Controls" role="button" data-slide="prev">
               <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
               <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carouselExample3Controls" role="button" data-slide="next">
               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
               <span class="sr-only">Next</span>
               </a>
            </div>
         </div>
      </div>
   </section>
    )
}

export default ClientSection;