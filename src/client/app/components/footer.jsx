import React from "react"
import { style } from "./styles/footer.css"
import {Desktop, Mobile } from "./device"
import { Grid, Row, Col } from 'react-flexbox-grid';

class Footer extends React.Component{
  render(){
    return (
      <div>
        <Desktop>
          <div className="footer-desktop">
            <div className="textContainer-desktop">
                <p>© ATA IT Limited. All rights reserved 2017.</p>
            </div>
            <div className="socialLink-desktop">
                <a href="https://www.facebook.com/advancedtechnologyofasia/" rel="nofollow">
                  <div className="socialLink-icon socialLink-facebook-icon"/>
                </a>
                <a href="https://www.linkedin.com/company/ata-it-limited" rel="nofollow">
                  <div className="socialLink-icon socialLink-linkedin-icon"/>
                </a>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div className="footer-mobile">
            <div className="socialLink-mobile">
              <a href="https://www.facebook.com/advancedtechnologyofasia/" rel="nofollow">
                <div className="socialLink-icon socialLink-facebook-icon"/>
              </a>
              <a href="https://www.linkedin.com/company/ata-it-limited" rel="nofollow">
                <div className="socialLink-icon socialLink-linkedin-icon"/>
              </a>
            </div>
            <div className="textContainer-mobile">
                <p>© ATA IT Limited. All rights reserved 2017.</p>
            </div>
          </div>
        </Mobile>
      </div>
    );
  }
}
export default Footer;
