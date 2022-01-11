import React from 'react';
import ArrivalSection from '../Homepage/Arrival/ArrivalSection';
import Header from '../Homepage/Header/Header';
import WhySection from '../Homepage/WhyShopSection/WhySection';
import FooterSection from '../InnerPagesFooter/FooterSection';

const About = () => {
    return (
        <div>
            <Header />
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>About us</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WhySection />
            <ArrivalSection />
            <FooterSection />
        </div>
    );
}

export default About;

