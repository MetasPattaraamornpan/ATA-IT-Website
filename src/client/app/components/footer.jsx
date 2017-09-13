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
            <Col xs={1}></Col>
            <Col xs={4}>
              <div class="textContainer"><font color="#ffffff">
                <p class="heading-menu">About Us</p>
                <p class="heading-menu">Products</p>
                <ul>
                  <li class="submenu">Core Banking System</li>
                  <li class="submenu">Mobile & Web</li>
                  <li class="submenu">Quality Assurance</li>
                  <li class="submenu">IT Dashboard</li>
                  <li class="submenu">IT Security</li>
                  <li class="submenu">Operation Monitoring </li>
                </ul>
                <p class="heading-menu">Careers</p>
                <ul>
                  <li class="submenu">Join us</li>
                </ul>
                <p class="heading-menu">Contact us</p>
                <p class="heading-menu"><br/></p>
                <p class="heading-menu">© ATA IT Limited. All rights reserved 2017.</p>
                </font>
              </div>

            </Col>
            <Col xs={3}></Col>
            <Col xs={3}>
              <Row start="xs">
                
              </Row>
            </Col>
          </Row>
        </Desktop>
        <Mobile>
        </Mobile>
      </div>
    );
  }
}
export default Footer;
