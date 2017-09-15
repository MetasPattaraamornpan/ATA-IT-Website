import React from "react"
import { style } from "./styles/footer.css"
import {Desktop, Mobile } from "./device"
import { Grid, Row, Col } from 'react-flexbox-grid';

class Footer extends React.Component{
  render(){
    return (
      <div className="footer">
        <Desktop>
            <div className="textContainer">
                <p className="heading-menu"><font color="#ffffff">© ATA IT Limited. All rights reserved 2017.</font></p>
            </div>
            <div className="socialLink">
                <a href="https://www.facebook.com/advancedtechnologyofasia/" rel="nofollow">
                  <div className="socialLink-icon socialLink-facebook-icon"/>
                </a>
                <div className="socialLink-icon socialLink-instagram-icon"/>
                <a href="https://www.linkedin.com/company/ata-it-limited" rel="nofollow">
                  <div className="socialLink-icon socialLink-linkedin-icon"/>
                </a>
            </div>
        </Desktop>
        <Mobile>
        <div className="textContainer">
            <p className="heading-menu"><font color="#ffffff">© ATA IT Limited. All rights reserved 2017.</font></p>
        </div>
        <div className="socialLink">
            <a href="https://www.facebook.com/advancedtechnologyofasia/" rel="nofollow">
              <div className="socialLink-icon socialLink-facebook-icon"/>
            </a>
            <div className="socialLink-icon socialLink-instagram-icon"/>
            <a href="https://www.linkedin.com/company/ata-it-limited" rel="nofollow">
              <div className="socialLink-icon socialLink-linkedin-icon"/>
            </a>
        </div>
        </Mobile>
      </div>
    );
  }
}
export default Footer;
