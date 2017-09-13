import React from "react"
import './styles/home.css';
import { Desktop, Mobile } from './device'
import Logo from './logo';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import { ParallaxController } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
//
// import ParallaxTest from './parallax';
//
// ParallaxController.init();

export default class Navbar extends React.Component {
  // showSettings (event) {
  //   event.preventDefault();
  // }


  // <section className="topSection">
  //   <article style={{width:'100%', height:'100%'}}>
  //     <Logo/>
  //   </article>
  // </section>

  // <Parallax
  //   className="custom-class"
  //   offsetYMax={20}
  //   offsetYMin={-20}
  //   slowerScrollRate
  //   tag="figure"
  // >
  //   <img src="./app/components/images/bannerbg.png" />
  // </Parallax>

  // <ParallaxTest/>

  render () {
    return (
      <div className="homeContent">
        <section className="topSection">
          <article style={{width:'100%', height:'100%'}}>
            <Logo/>
          </article>
        </section>
        <div className="containerHolder">
          <Row>
            <Col xs >
              <div style={{paddingTop: '80px', lineHeight: '44px'}}>
                <h1>ABOUT US</h1>
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
            <Col xs >Aboutus</Col>
          </Row>
        </div>
      </div>

    );
  }
}
