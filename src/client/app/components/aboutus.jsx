import './styles/aboutus.css';
import React from "react"
import { Row, Col } from 'react-flexbox-grid';
import {Desktop, Mobile } from "./device"

export default class AboutUs extends React.Component {
  render () {
    return (
      <div className="aboutusContent" ref={(section) => { this.AboutUs = section; }}>
      <Desktop>
        <Row>
          <Col xs >
            <div style={{paddingTop: '80px', lineHeight: '44px'}}>
              <h1>About Us</h1>
            </div>
            <div>
              <h3>
                <front>ATA IT Limited established in Thailand on February 2016 will be acting as an “IT hub” or “IT center” for commercial banks and other companies in South East Asia and Pacific Ocean areas.</front>
                <div><br/></div>
                <front>National Bank of Canada (BNC) is the major shareholder and parent company of ATA IT LIMITED. BNC is an integrated provider of financial services to retail, commercial, corporate and institutional clients.</front>
                <div><br/></div>
                <front>National Bank is the leading bank in Quebec and the partner of choice for small and medium-sized enterprises. It is also the sixth largest bank in Canada with branches in almost every province. Clients in the United States, Europe and other parts of the world are served through a network of representative offices, subsidiaries and partnerships.</front>
              </h3>
            </div>
          </Col>
          <Col xs >
            <img style={{margin:'10% 0px'}} src="./app/components/images/aboutus_01.png"/>
          </Col>
        </Row>
      </Desktop>
      <Mobile>
        <div style={{paddingTop: '80px', lineHeight: '44px'}}>
          <h1>About Us</h1>
        </div>
        <div>
              <h3>
                <front>ATA IT Limited established in Thailand on February 2016 will be acting as an “IT hub” or “IT center” for commercial banks and other companies in South East Asia and Pacific Ocean areas.</front>
                <div><br/></div>
                <front>National Bank of Canada (BNC) is the major shareholder and parent company of ATA IT LIMITED. BNC is an integrated provider of financial services to retail, commercial, corporate and institutional clients.</front>
                <div><br/></div>
                <front>National Bank is the leading bank in Quebec and the partner of choice for small and medium-sized enterprises. It is also the sixth largest bank in Canada with branches in almost every province. Clients in the United States, Europe and other parts of the world are served through a network of representative offices, subsidiaries and partnerships.</front>
              </h3>
            </div>
          <div>
            <img style={{margin:'10% 0px'}} src="./app/components/images/aboutus_01.png"/>
          </div>
      </Mobile>
      </div>
    )
  };
}
