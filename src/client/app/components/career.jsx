import './styles/career.css';
import React from "react"
import { Row, Col } from 'react-flexbox-grid';

export default class Career extends React.Component {
  render () {
    return (
      <div className="careerContent" ref={(section) => { this.Career = section; }}>
        <Row>
          <Col sm={3}>
            <img style={{width:'100%', padding: '25% 0px'}} src="./app/components/images/career_00.jpeg"/>
          </Col>
          <Col xs={9} style={{padding:'0px 20px'}}>
            <Row>
              <h1>Why ATA IT?</h1>
            </Row>
            <Row>
              <h3>
                <front>At ATA IT, we strive for success through Efficiency in Motion, where success is only attainable when everyone moves forward together. Our team is full of magnificent people with varying backgrounds and experiences that can share different perspectives and help each other grow amazingly.</front>
                <div><br/></div>
                <front>Come Join us! Join a diverse team that succeeds. </front>
              </h3>
            </Row>
            <Row>
              <button>JOIN US</button>
            </Row>
          </Col>
        </Row>
      </div>
    )
  };
}
