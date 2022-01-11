import React from "react";

const BannerCard = (props) => {
    return (
        <div className="carousel-item ">
            <div className="container ">
                <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                        <div className="detail-box">
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
                            <div className="btn-box">
                                <a href="/" className="btn1">
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