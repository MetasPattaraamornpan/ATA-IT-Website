import React from "react"
import { style } from "./styles/footer.css"
import {Desktop, Mobile } from "./device"

class Footer extends React.Component{
  render(){
    return (
      <div id="footer">
        <Desktop>
          <div class="breadcrumb" >
            <ul id="footer-about-us">
              <li class="head">
                <a href="https://www.traveloka.com/en-th/flight/to/1">About us</a>
              </li>
            </ul>
            <ul id="footer-products">
              <li class="information">Products</li>
            </ul>
            <ul id="footer-contact-us">
              <li class="information">Contact us</li>
            </ul>
            <ul id="footer-social">
              <div class="social">
                <a href="https://www.facebook.com/advancedtechnologyofasia">
                  <img src="./app/components/images/facebook.png" />
                </a>
              </div>
            </ul>
            </div>
          <div id="copyright" >
            copyright
          </div>
        </Desktop>
        <Mobile>
          <div class="breadcrumb" >
            <div>
              <ul id="footer-about-us">
                <li class="head">
                  <a href="https://www.traveloka.com/en-th/flight/to/1">About us</a>
                </li>
              </ul>
              <ul id="footer-products">
                <li class="information">Products</li>
              </ul>
              <ul id="footer-contact-us">
                <li class="information">Contact us</li>
              </ul>
              <ul id="footer-social">
                <div class="social">
                  <a href="https://www.facebook.com/advancedtechnologyofasia">
                    <img src="./app/components/images/facebook.png" />
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div id="copyright" >
            copyright
          </div>
        </Mobile>
      </div>
    );
  }
}
export default Footer;
