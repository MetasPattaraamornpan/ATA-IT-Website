import React from "react"
import { style } from "./styles/footer.css"
import {Desktop, Mobile } from "./device"
import { Grid, Row, Col } from 'react-flexbox-grid';

class Footer extends React.Component{
  render(){
    return (
      <div id="footer">
        <Desktop>
          <Row around="xs">
            <Col xs={4}>
              <div className="textContainer"><font color="#ffffff">
                <p className="heading-menu">About Us</p>
                <p className="heading-menu">Products</p>
                <ul>
                  <li className="submenu">Core Banking System</li>
                  <li className="submenu">Mobile & Web</li>
                  <li className="submenu">Quality Assurance</li>
                  <li className="submenu">IT Dashboard</li>
                  <li className="submenu">IT Security</li>
                  <li className="submenu">Operation Monitoring </li>
                </ul>
                <p className="heading-menu">Careers</p>
                <ul>
                  <li className="submenu">Join us</li>
                </ul>
                <p className="heading-menu">Contact us</p>

                </font>
              </div>
            </Col>

            <Row bottom="xs">
            <Col xs={12}>
            <Row>
              <Col xs={2}>
                  <a href="https://www.facebook.com/advancedtechnologyofasia/" rel="nofollow">
                    <div className="facebook-icon"/>
                  </a>
              </Col>
              <Col xs={2}>
                  <div className="instagram-icon"/>
              </Col>
              <Col xs={2}>
                  <a href="https://www.linkedin.com/company/ata-it-limited" rel="nofollow">
                    <div className="linkedin-icon"/>
                  </a>
              </Col>
            </Row>
                <br/>
                <p className="heading-menu"><font color="#ffffff">© ATA IT Limited. All rights reserved 2017.</font></p>
            </Col>
            </Row>
          </Row>
        </Desktop>
        <Mobile>
        <Row around="xs">
          <Col xs={4}>
            <div className="textContainer"><font color="#ffffff">
              <p className="heading-menu">About Us</p>
              <p className="heading-menu">Products</p>
              <ul>
                <li className="submenu">Core Banking System</li>
                <li className="submenu">Mobile & Web</li>
                <li className="submenu">Quality Assurance</li>
                <li className="submenu">IT Dashboard</li>
                <li className="submenu">IT Security</li>
                <li className="submenu">Operation Monitoring </li>
              </ul>
              <p className="heading-menu">Careers</p>
              <ul>
                <li className="submenu">Join us</li>
              </ul>
              <p className="heading-menu">Contact us</p>

              </font>
            </div>
          </Col>
          <Row bottom="xs">
          <Col xs={12}>
          <Row>
            <Col xs={2}>
                <a href="https://www.facebook.com/advancedtechnologyofasia/" rel="nofollow">
                  <div className="facebook-icon"/>
                </a>
            </Col>
            <Col xs={2}>
                <div className="instagram-icon"/>
            </Col>
            <Col xs={2}>
                <a href="https://www.linkedin.com/company/ata-it-limited" rel="nofollow">
                  <div className="linkedin-icon"/>
                </a>
            </Col>
          </Row>
              <br/>
              <p className="heading-menu"><font color="#ffffff">© ATA IT Limited. All rights reserved 2017.</font></p>
          </Col>
          </Row>
        </Row>
        </Mobile>
      </div>
    );
  }
}
export default Footer;
