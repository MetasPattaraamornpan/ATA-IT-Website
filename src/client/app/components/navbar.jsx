import React from "react"
import './styles/navbar.css';
import { push as Menu } from 'react-burger-menu'
import { Desktop, Mobile } from './device'


export default class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  state = {
    selectIndex : 0
  };

  render () {
      return (
        <div style={{position: 'fixed', zIndex: 999}}>
          <Desktop >
            <navbar className='navbar navbar-default navbar-static-top' >
              <div className="navHead">
              <div className="logo">
                <img className="logo_image_desktop" src="./app/components/images/logo_ATA_IT.jpg"/>
              </div>
                <ul className="mainNavBar">
                  <li className="menuHeader selected">HOME</li>
                  <li className="menuHeader">ABOUT US</li>
                  <li className="menuHeader">OUR TEAMS</li>
                  <li className="menuHeader">CAREERS</li>
                  <li className="menuHeader">CONTACT US</li>
                </ul>
              </div>
            </navbar>
          </Desktop>
          <Mobile>
            <navbar className='navbar navbar-default navbar-static-top' >
              <div className="navHead">
                <div className="logo">
                  <img className="logo_image_mobile" src="./app/components/images/logo_ATA_IT.jpg"/>
                </div>
                <Menu id="stack" right customBurgerIcon={ <img src="./app/components/images/hamburger_menu.png" /> }>
                  <ul className="menuBurger">
                    <li className="menuHeader selected">HOME</li>
                    <li className="menu-item">ABOUT US</li>
                    <li className="menu-item">OUR TEAMS</li>
                    <li className="menu-item">CAREERS</li>
                    <li className="menu-item">CONTACT US</li>
                  </ul>
                </Menu>
              </div>
            </navbar>
          </Mobile>
        </div>

    );
  }
}
