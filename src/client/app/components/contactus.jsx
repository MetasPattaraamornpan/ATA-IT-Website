import './styles/contactus.css';
import React from "react"
import { Row, Col } from 'react-flexbox-grid';
import {Desktop, Mobile } from "./device"

export default class ContactUs extends React.Component {
  render () {
    return (
      <div className="contactusContent" >
        <Row center="xs">
          <Col xs={6}>
            <h1>Contact Us</h1>
          </Col>
        </Row>
        <Row className="contactusRow">
          <Col xs>
            <div style={{height: '400px'}} >
              <iframe className="map" scrolling="no" frameBorder="0" style={{border: '0px', width: '100%', height: '100%'}} src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAxJ8eSkp2ZBnjHBUEz_xk3Q3SBv9yzXos&amp;q=%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%A0%E0%B8%B1%E0%B8%A2%20%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3&amp;zoom=15&amp;maptype=roadmap"></iframe>
            </div>
          </Col>
          <Col xs>
            <h2>
              <front>Address</front>
            </h2>
            <h3>
              <front>
                Bangkok Insurance Building,
                <br/>
                29th floor, Sathorn Road, Bangkok, 10120
              </front>
            </h3>
            <h2>
              <front>Telephone</front>
            </h2>
            <h3>
              <front>
                +66 2 105 4574
              </front>
            </h3>
            <h2>
              <front>Email</front>
            </h2>
            <h3>
              <front>
                info@ata-it-th.com
              </front>
            </h3>
          </Col>
        </Row>
      </div>
    )
  };
}
