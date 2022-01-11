import React, { useEffect, useState } from "react";
import axiosMain from "../../../http/axios/axios_main";
import ProductCard from "./ProductCard";

const ProductSection = () => {

    const [productDetails, setProductDetails] = useState([]);

    const productDetailsApiCall = async () => {
        const response = await axiosMain.get(`/item`)
        console.log("data", response.data);
        setProductDetails(response.data);
    }

    useEffect(() => {
        productDetailsApiCall();
    }, [])

    return (
        <section className="product_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Our <span>products</span>
                    </h2>
                </div>
                <div className="row">
                    {productDetails.map((product, index) => (
                        <ProductCard key={index}
                            itemName={product.name}
                            image={product.image}
                            cost={product.cost} />
                    ))}
                </div>
            </div>
            <div className="btn-box">
                <a href="/">
                    View All products
                </a>
            </div>
        </section >
    )
}

export default ProductSection;