import React from "react"
import './styles/home.css';
import './styles/flip.css';
import { Desktop, Mobile } from './device'
import Logo from './logo';
import AboutUs from './aboutus.jsx'
import Team from './team.jsx'
import Carrers from './career.jsx'
import ContactUs from './contactus.jsx'
import { Row, Col } from 'react-flexbox-grid';
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
      <div className="homeContent" ref={(section) => { this.Home = section; }}>
        <section className="topSection">
          <article style={{width:'100%', height:'100%'}}>
          <div id="container">
          Efficiency in
          <div id="flip">
            <div><div>Motion</div></div><br/>
            <div><div>Work</div></div><br/>
            <div><div>Everything</div></div><br/>
          </div>
          </div>
          </article>
        </section>
        <AboutUs />
        <Team />
        <Carrers />
        <ContactUs />
      </div>

    );
  }
}
