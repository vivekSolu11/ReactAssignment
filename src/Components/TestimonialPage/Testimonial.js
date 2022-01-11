import React from 'react';
import ClientSection from '../Homepage/Client/ClientSection';
import Header from '../Homepage/Header/Header';
import FooterSection from '../InnerPagesFooter/FooterSection';

const Testimonial = () => {
    return (
        <div>
            <Header />
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>Testimonial</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <ClientSection/>      
            <FooterSection/>
        </div>
    );
}

export default Testimonial;

