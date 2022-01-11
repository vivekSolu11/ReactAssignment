import React from "react";
import Header from "../Homepage/Header/Header";
import ProductSection from "../Homepage/Product/ProductSection";
import FooterSection from "../InnerPagesFooter/FooterSection";

const Product = () => {
    return (
        <div>
            <Header />
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>Product</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductSection />
            <FooterSection />
        </div>
    )
}

export default Product;