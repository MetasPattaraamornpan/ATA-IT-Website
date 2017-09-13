import React from "react"
import './styles/navbar.css';
import { push as Menu } from 'react-burger-menu'
import { Desktop, Mobile } from './device'


export default class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
      return (
        <div style={{position: 'fixed', zIndex: 999}}>
          <Desktop >
            <navbar className='navbar navbar-default navbar-static-top' >
              <div className="navHead">
                <div className="logo">
                  <img src="./app/components/images/logo.jpg" />
                </div>
                <ul className="mainNavBar">
                  <li className="menuHeader">ABOUT US</li>
                  <li className="menuHeader">PRODUCT CATALOG</li>
                  <li className="menuHeader">CARREERS</li>
                  <li className="menuHeader">CONTACT US</li>
                </ul>
              </div>
            </navbar>
          </Desktop>
          <Mobile>
            <navbar className='navbar navbar-default navbar-static-top' >
              <div className="navHead">
                <div className="logo">
                  <img src="./app/components/images/logo.jpg" />
                </div>
                <Menu id="stack" right customBurgerIcon={ <img src="./app/components/images/menu_icon.png" /> }>
                  <ul className="menuBurger">
                    <li className="menu-item">ABOUT US</li>
                    <li className="menu-item">PRODUCT CATALOG</li>
                    <li className="menu-item">CARREERS</li>
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
