import './styles/team.css';
import React from "react"
import { Row, Col } from 'react-flexbox-grid';

export default class Team extends React.Component {
  render () {
    return (
      <div className="teamContent">
        <Row className="teamRow" center="xs">
          <Col xs={6}>
            <h1>Our Teams</h1>
          </Col>
        </Row>
        <Row className="teamRow">
          <Col xs>
            <Row>
              <Col xs><img src="./app/components/images/Core_Banking_Icon_Grey.png" /></Col>
              <Col xs>
                <h2>
                  <front>Core Banking System</front>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs>
            <Row>
              <Col xs><img src="./app/components/images/Mobile_&_Web_Grey.png" /></Col>
              <Col xs>
                <h2>
                  <front>Mobile & Web</front>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs>
            <Row>
              <Col xs><img src="./app/components/images/QA_Grey.png" /></Col>
              <Col xs>
                <h2>
                  <front>Quality Assurance</front>
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="teamRow">
          <Col xs>
            <Row>
              <Col xs><img src="./app/components/images/IT_Dashboard_Grey.png" /></Col>
              <Col xs>
                <h2>
                  <front>IT Dashboard</front>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs>
            <Row>
              <Col xs><img src="./app/components/images/IT_Security_Grey.png" /></Col>
              <Col xs>
                <h2>
                  <front>IT Security</front>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs>
            <Row>
              <Col xs><img src="./app/components/images/Operation_Monitoring_Grey.png" /></Col>
              <Col xs>
                <h2>
                  <front>Operation Monitoring</front>
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  };
}
