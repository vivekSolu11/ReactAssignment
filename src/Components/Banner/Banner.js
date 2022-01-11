import React from 'react';
import BannerCard from './BannerCard';
// import AliceCarousel from 'react-alice-carousel';
// import { Row } from 'react-bootstrap';

// const responsive = {
//   0: { items: 1 },
//   550: { items: 2 },
//   907: { items: 3 },
//   1100: { items: 4 },
//   1300: { items: 5 },
//   1500: { items: 6 },
// };

// const items = [
//     <div className="item">
//         <div className="detail-box">
//             <h1>
//                 <span>
//                     Sale 20% Off
//                 </span>
//                 <br/>
//                 On Everything
//             </h1>
//             <p>
//                 Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
//             </p>
//             <div className="btn-box">
//                 <a href="/" className="btn1">
//                     Shop Now
//                 </a>
//             </div>
//         </div>
//     </div>,
//     <div className="item">
//         <div className="detail-box">
//             <h1>
//                 <span>
//                     Sale 20% Off
//                 </span>
//                 <br/>
//                 On Everything
//             </h1>
//             <p>
//                 Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
//             </p>
//             <div className="btn-box">
//                 <a href="/" className="btn1">
//                     Shop Now
//                 </a>
//             </div>
//         </div>
//     </div>,
//     <div className="item">
//         <div className="detail-box">
//             <h1>
//                 <span>
//                     Sale 20% Off
//                 </span>
//                 <br/>
//                 On Everything
//             </h1>
//             <p>
//                 Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
//             </p>
//             <div className="btn-box">
//                 <a href="/" className="btn1">
//                     Shop Now
//                 </a>
//             </div>
//         </div>
//     </div>,
// ];


const Banner = () => {
    return (
        <section class="slider_section ">
            <div class="slider_bg_box">
               <img src={require("../../assests/images/slider-bg.jpg")} alt=""/>
            </div>
            <div id="customCarousel1" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container ">
                        <div class="row">
                           <div class="col-md-7 col-lg-6 ">
                              <div class="detail-box">
                                 <h1>
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    <br/>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                 </p>
                                 <div class="btn-box">
                                    <a href="/" class="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>        
                  <BannerCard
                  sale="20%"
                  store="ddfadsf"
                  description="fasdf"/>
                  <BannerCard
                  sale="20%"
                  store="ddfadsf"
                  description="fasdf"/>    
               </div>
               <div class="container">
                  <ol class="carousel-indicators">
                     <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
                     <li data-target="#customCarousel1" data-slide-to="1"></li>
                     <li data-target="#customCarousel1" data-slide-to="2"></li>
                  </ol>
               </div>
            </div>
         </section>
    )
}

export default Banner;