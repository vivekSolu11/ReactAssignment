import React from "react";
import ArrivalSection from "./Arrival/ArrivalSection";
import Banner from "./Banner/Banner";
import ClientSection from "./Client/ClientSection";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ProductSection from "./Product/ProductSection";
import SubscribeSection from "./Subscribe/SubscribeSection";
import WhySection from "./WhyShopSection/WhySection";

const Homepage = () => {
    return (
        <div>
            <Header />
            <Banner />
            <WhySection />
            <ArrivalSection />
            <ProductSection />
            <SubscribeSection />
            <ClientSection />
            <Footer />

        </div>
    )
}

export default Homepage;