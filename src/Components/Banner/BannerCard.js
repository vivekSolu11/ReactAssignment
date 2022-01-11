import React from "react";

const BannerCard = (props) => {
    return (
        <div class="carousel-item ">
            <div class="container ">
                <div class="row">
                    <div class="col-md-7 col-lg-6 ">
                        <div class="detail-box">
                            <h1>
                                <span>
                                   {props.sale}
                                </span>
                                <br />
                                {props.store}
                            </h1>
                            <p>
                               {props.description}
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
    )
}

export default BannerCard;