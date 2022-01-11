import React from "react";

const ProductCard = (props) =>{
    return(
        <div className="col-sm-6 col-md-4 col-lg-4">
        <div className="box">
            <div className="option_container">
                <div className="options">
                    <a href="/" className="option1">
                        {props.itemName}
                    </a>
                    <a href="/" className="option2">
                        Buy Now
                    </a>
                </div>
            </div>
            <div className="img-box">
                <img src={props.image} alt=""/>
            </div>
            <div className="detail-box">
                <h5>
                {props.itemName}
                </h5>
                <h6>
                {props.cost}
                </h6>
            </div>
        </div>
    </div>
    )
}

export default ProductCard;