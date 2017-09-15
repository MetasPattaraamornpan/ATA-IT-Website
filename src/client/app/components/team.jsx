import './styles/team.css';
import React from "react"
import { Row, Col } from 'react-flexbox-grid';
import Modal from 'react-overlays/lib/Modal';
import ReactModal from 'react-modal';

export default class Team extends React.Component{
  state = {
    showModal: false,
    modal:{
      icon: '',
      header: '',
      detail: ''
    }
  };

  team_item = [
    {
      icon: './app/components/images/Core_Banking_Icon_',
      header: 'Core Banking System',
      detail: `ATA IT offers core banking solutions employing Flexcube and Bankflex to provide business consulting, support and development services for banking systems.

        Business consulting services
        • Provide Digital Banking implementation for Banking systems
        • Work in the perspective of business users within Retail Operation and Corporate Operation consulting services.

        Support services
        • Deep understanding of the Business Requirements to guarantee that the system is
        configured to achieve his goals.

        Development & individual services
        • Development of digital channels
        • Provide services configured to Achieve business requirements and Develop new business requirements`
    },{
      icon: './app/components/images/Mobile_&_Web_',
      header: 'Mobile & Web Banking Development',
      detail: `ATA Development Team designs and develops website, mobile application and solutions related to financial services.

      Our developers are working with AGILE method to ensure quality and efficiency. `
    },{
      icon: './app/components/images/QA_',
      header: 'Quality Assurance',
      detail: `Quality Assurance at ATA IT is providing testing service to certify that products fit their purpose without undesirable effects when used outside of its design parameters and in worst case fails safely.

        As software applications are getting more and more complex and interact with different platforms and devices they need to be tested. We are using Agile Testing Methodology to make sure software products and systems meets their specified requirements and are fully tested to successfully operate in all the anticipated environment with the required usability and security.

        ATA Testing Service
        • Automation Testing: web app, Android app, and iOS app.
        • Functional Testing: smoke testing, integration testing,  system testing, regression testing, user acceptance testing
        • Non-Functional Testing: Capacity and Performance Testing and security testing`
    },{
      icon: './app/components/images/IT_Dashboard_',
      header: 'IT Dashboard',
      detail: `• Develop dashboards to support IT operations management as per provided requirements by developing web modules, relational model (OLAP) and complex queries
        • Testing and maintenance of IT dashboards
        • Extraction, manipulation and integrity validation of data
        • Optimize reports and propose optimizations for data warehouse and DataMart
        • Automation of reporting tasks
        • Build and maintain documentation for reports and queries`
    },{
      icon: './app/components/images/IT_Security_',
      header: 'IT Security',
      detail: `Handle all the SIEM administration, configuration and Support
        • Source management
        • Rule Maintenance
        • Troubleshooting and service restoration
        • Operational Monitoring
        • Monthly Report showing performance
        • Platform updates changes, and incidents

        Monitor, Protect and Report on the security of your data and systems in real-time
        • 24x7x365 monitoring delivered out of our state of the art Cybersercurity Operation (including holidays)
        • Quick identification, analysis, and notification of all security incidents
        • Monthly Metrics

        Mitigate the effect of an attack or intrusion. Allows to limit the damage and reduce the recovery time and cost
        • 24x7x365 availability for compromises of all sizes and severities 24/7 Service Hours per week including holidays
        • Analyze, identify, contain, communicate, and document the intrusion
        • Incident Report outlining scope of the incident, how the intruder entered the network, containment of the threat, and the remediation necessary to correct the damage`
    },{
      icon: './app/components/images/Operation_Monitoring_',
      header: 'Operation Monitoring',
      detail: `ATA IT Operation Monitoring team offers 24/7 operator service that provides support to insure the availability of the IT to fully operate anytime.

        Operation Monitoring - Provides initial support and service operation to resolve incident, change, problems and requests.

        Escalation - Monitor the IT activity and notice support team in case unusual activity.

        Our team operates 24/7 including overnight, shift hours, weekends, and holidays.`
    }
  ]

  render () {
    return (
      <div className="teamContent" ref={(section) => { this.Team = section; }}>
        <Row className="teamRow" center="xs">
          <Col xs={6}>
            <h1>Our Teams</h1>
          </Col>
        </Row>
        <Row className="teamRow">
          <Col xs>
            <Row>
              <Col xs><img src={`${this.team_item[0].icon}Grey.png`} onClick={() => {this.open(0)}}/></Col>
              <Col xs>
                <h2>
                  <front onClick={() => {this.open(0)}}>{this.team_item[0].header}</front>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs>
            <Row>
              <Col xs><img src={`${this.team_item[1].icon}Grey.png`} onClick={() => {this.open(1)}}/></Col>
              <Col xs>
                <h2>
                  <front onClick={() => {this.open(1)}}>{this.team_item[1].header}</front>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs>
            <Row>
              <Col xs><img src={`${this.team_item[2].icon}Grey.png`} onClick={() => {this.open(2)}}/></Col>
              <Col xs>
                <h2>
                  <front onClick={() => {this.open(2)}}>{this.team_item[2].header}</front>
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="teamRow">
          <Col xs>
            <Row>
              <Col xs><img src={`${this.team_item[3].icon}Grey.png`} onClick={() => {this.open(3)}}/></Col>
              <Col xs>
                <h2>
                  <front onClick={() => {this.open(3)}}>{this.team_item[3].header}</front>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs>
            <Row>
              <Col xs><img src={`${this.team_item[4].icon}Grey.png`} onClick={() => {this.open(4)}}/></Col>
              <Col xs>
                <h2>
                  <front onClick={() => {this.open(4)}}>{this.team_item[4].header}</front>
                </h2>
              </Col>
            </Row>
          </Col>
          <Col xs>
            <Row>
              <Col xs><img src={`${this.team_item[5].icon}Grey.png`} onClick={() => {this.open(5)}}/></Col>
              <Col xs>
                <h2>
                  <front onClick={() => {this.open(5)}}>{this.team_item[5].header}</front>
                </h2>
              </Col>
            </Row>
          </Col>
        </Row>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Inline Styles Modal Example"
           shouldCloseOnOverlayClick={true}
           onRequestClose={this.close}
           className="reactModal"
           style={{
              overlay: {
                backgroundColor: 'rgba(0,0,0,0.5)',
                position: 'fixed',
                zIndex: '1040'
              }
            }}

        >
          <div className="teamModal" >
            <Row>
              <Col>
                <img style={{padding: '10% 0px'}} src={`${this.state.modal.icon}White.png`} />
              </Col>
              <Col xs>
                <h2 >{this.state.modal.header}</h2>
                <h3 >{this.state.modal.header}</h3>
              </Col>
            </Row>
            <Row>
              <h3 >{this.state.modal.detail}</h3>
            </Row>
          </div>
        </ReactModal>
      </div>
    )
  };

  close = () => {
    this.setState({ showModal: false });
  }

  open = (index) => {
    this.setState({showModal: true, modal: this.team_item[index]});
  }
}
