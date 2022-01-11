import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer>
      <div className="container footercon">
        <div className="row footer">
          <div className="col-lg-4 col-md-4 footerrow1">
            <img src={require("./../../../assests/images/logo.png")} alt="logo" className='fotterLogo' />
            <div  >
              <div className="well">
                <ul>
                  <li className="footerRow1Font">
                    <span className="footerRow1Heading">ADDRESS:</span>  28 White tower, Street Name New York City, USA
                  </li>

                  <li className="footerRow1Font">
                    <span className="footerRow1Heading">TELEPHONE:</span> +91 987 654 3210
                  </li>
                  <li className="footerRow1Font">
                    <span className="footerRow1Heading"> EMAIL:</span> yourmain@gmail.com
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 footerCompany">
            <h3 role={"menuitem"}
              data-toggle="collapse"
              data-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Menu
            </h3>

            <div className="collapse dont-collapse-sm" id="collapseExample">
              <div className="well">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>

                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">Testimonial</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2">
            <h3 role={"menuitem"}
              data-toggle="collapse"
              data-target="#collapseExample1"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              ACCOUNT
            </h3>
            <div className="collapse dont-collapse-sm" id="collapseExample1">
              <div className="well">
                <ul>
                  <li>
                    <a href="/">Account</a>
                  </li>
                  <li>
                    <a href="/">Checkout</a>
                  </li>
                  <li>
                    <a href="/">Login</a>
                  </li>
                  <li>
                    <a href="/">Register</a>
                  </li>
                  <li>
                    <a href="/">Shopping</a>
                  </li>
                  <li>
                    <a href="/">Widget</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <h3 role={"menuitem"}
              data-toggle="collapse"
              data-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              NEWSLETTER
            </h3>
            <div className="collapse dont-collapse-sm" id="collapseExample2">
              <div className="well">
                <ul style={{ marginLeft: "0px" }}>
                  <li>
                    Subscribe by our newsletter and get update protidin.
                  </li>
                  <li>
                    <form>
                      <fieldset>
                        <div className="field">
                          <input type="email" placeholder="Enter Your Mail" name="email" />
                          <input type="submit" value="Subscribe" />
                        </div>
                      </fieldset>
                    </form>
                  </li>

                </ul>
              </div>
            </div>
          </div>

        </div>


      </div>
      <div className="row add_bottom_25 footerBottomLine">
        <div className="col-lg-12 bottomRowFooter">
          <span className="bottomRowContent">
            © 2021 All Rights Reserved By Free Html Templates
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
