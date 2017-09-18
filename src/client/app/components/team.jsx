import './styles/team.css';
import React from "react"
import { Row, Col } from 'react-flexbox-grid';
import ReactModal from 'react-modal';
import {Desktop, Mobile } from "./device"

export default class Team extends React.Component{
  state = {
    showModal: false,
    modal:{
      icon_grey: '',
      icon_white: '',
      header: '',
      detail: ''
    }
  };

  team_item = [
    {
      icon_grey: './app/components/images/Core_Banking_Icon_Grey.png',
      icon_white: './app/components/images/Core_Banking_Icon_White.png',
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
      icon_grey: './app/components/images/Mobile_&_Web_Grey.png',
      icon_white: './app/components/images/Mobile_&_Web_White.png',
      header: `Mobile & Web Banking \nDevelopment`,
      detail: `ATA Development Team designs and develops website, mobile application and solutions related to financial services.

      Our developers are working with AGILE method to ensure quality and efficiency. `
    },{
      icon_grey: './app/components/images/QA_Grey.png',
      icon_white: './app/components/images/QA_White.png',
      header: 'Quality Assurance',
      detail: `Quality Assurance at ATA IT is providing testing service to certify that products fit their purpose without undesirable effects when used outside of its design parameters and in worst case fails safely.

        As software applications are getting more and more complex and interact with different platforms and devices they need to be tested. We are using Agile Testing Methodology to make sure software products and systems meets their specified requirements and are fully tested to successfully operate in all the anticipated environment with the required usability and security.

        ATA Testing Service
        • Automation Testing: web app, Android app, and iOS app.
        • Functional Testing: smoke testing, integration testing,  system testing, regression testing, user acceptance testing
        • Non-Functional Testing: Capacity and Performance Testing and security testing`
    },{
      icon_grey: './app/components/images/IT_Dashboard_Grey.png',
      icon_white: './app/components/images/IT_Dashboard_White.png',
      header: 'IT Dashboard',
      detail: `• Develop dashboards to support IT operations management as per provided requirements by developing web modules, relational model (OLAP) and complex queries
        • Testing and maintenance of IT dashboards
        • Extraction, manipulation and integrity validation of data
        • Optimize reports and propose optimizations for data warehouse and DataMart
        • Automation of reporting tasks
        • Build and maintain documentation for reports and queries`
    },{
      icon_grey: './app/components/images/IT_Security_Grey.png',
      icon_white: './app/components/images/IT_Security_White.png',
      header: 'IT Security Monitoring',
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
      icon_grey: './app/components/images/Operation_Monitoring_Grey.png',
      icon_white: './app/components/images/Operation_Monitoring_White.png',
      header: 'Operation Monitoring',
      detail: `ATA IT Operation Monitoring team offers 24/7 operator service that provides support to insure the availability of the IT to fully operate anytime.

        Operation Monitoring - Provides initial support and service operation to resolve incident, change, problems and requests.

        Escalation - Monitor the IT activity and notice support team in case unusual activity.

        Our team operates 24/7 including overnight, shift hours, weekends, and holidays.`
    },{
      icon_grey: './app/components/images/IT_Infra_Grey.png',
      icon_white: './app/components/images/IT_Infra_White.png',
      header: 'IT Infrastructure ',
      detail: `System administrator takes care of all the IT infrastructure equipment of the Bank and the customer. We are working on infrastructure that provides :
        • Enterprise server
        • Enterprise storage
        • Enterprise network
        • Linux and Middleware
        • Collaboration with app team for core banking systems`
    },{
      icon_grey: './app/components/images/Disaster_Recover_Grey.png',
      icon_white: './app/components/images/Disaster_Recover_White.png',
      header: 'Disaster Recovery',
      detail: `Disaster Recovery Detail`
    },{
      icon_grey: '#',
      icon_white: '#',
      header: '',
      detail: ``
    }]

  render () {
    return (
      <div className="teamContent" >
      <Desktop>
        <Row className="teamRow" center="xs">
          <Col xs={6}>
            <h1>Our Teams</h1>
          </Col>
        </Row>
        {this.teamTable()}
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
                <img style={{padding: '10% 0px'}} src={this.state.modal.icon_white} />
              </Col>
              <Col xs>
                <h2 >{this.state.modal.header}</h2>
              </Col>
            </Row>
            <Row>
              <h3 >{this.state.modal.detail}</h3>
            </Row>
          </div>
        </ReactModal>
      </Desktop>
      <Mobile>
        <Row className="teamRow" center="xs">
          <Col xs={6}>
            <h1>Our Teams</h1>
          </Col>
        </Row>
        {this.teamTable()}
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
                <img style={{padding: '10% 0px'}} src={this.state.modal.icon_white} />
              </Col>
              <Col xs>
                <h2 >{this.state.modal.header}</h2>
              </Col>
            </Row>
            <Row>
              <h3 >{this.state.modal.detail}</h3>
            </Row>
          </div>
        </ReactModal>
      </Mobile>
      </div>
    )
  };

  close = () => {
    this.setState({ showModal: false });
  }

  open = (index) => {
    this.setState({showModal: true, modal: this.team_item[index]});
  }

  teamTable(){
    let teamRow=[];
    let arrTeam = Array.from(this.team_item);
    while (arrTeam.length > 0) {
      teamRow.push(arrTeam.splice(0,3))
    }
    return teamRow.map((teamCol,i) => (
      <Row className="teamRow" key={i}>
        {teamCol.map((team,j)=>{
          return (
            <Col key={j} xs>
              {team.icon_grey != "#" ? (
                <Row>
                  <Col>
                    <img src={team.icon_grey} onClick={() => {this.open(i*3+j)}}/>
                  </Col>
                  <Col>
                    <h2>
                    <front onClick={() => {this.open(i*3+j)}}>{team.header}</front>
                    </h2>
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col>
                  </Col>
                  <Col>
                  </Col>
                </Row>
              )}
            </Col>)
        })}
      </Row>
    ));

  }
}
