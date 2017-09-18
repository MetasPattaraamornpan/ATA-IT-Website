import React from "react"
import ReactDOM from 'react-dom';
import './styles/navbar.css';
import { push as Menu } from 'react-burger-menu'
import { Desktop, Mobile } from './device'
import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;

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
                  <img className="logo_image_desktop" src="./app/components/images/logo.jpg" />
                </div>
                <ul className="mainNavBar">
                  <li className="menuHeader" onClick={() => {this.goTo(0)}}>HOME</li>
                  <li className="menuHeader" onClick={() => {this.goTo(205)}}>ABOUT US</li>
                  <li className="menuHeader" onClick={() => {this.goTo(834)}}>OUR TEAMS</li>
                  <li className="menuHeader" onClick={() => {this.goTo(1386)}}>CAREERS</li>
                  <li className="menuHeader" onClick={() => {this.goTo(1773)}}>CONTACT US</li>
                </ul>
              </div>
            </navbar>
          </Desktop>
          <Mobile>
            <navbar className='navbar navbar-default navbar-static-top' >
              <div className="navHead" >
                <div className="logo">
                  <img className="logo_image_mobile" src="./app/components/images/logo.jpg" />
                </div>
                <Menu id="stack" right customBurgerIcon={ <img src="./app/components/images/menu_icon.png" /> }>
                  <ul className="menuBurger">
                    <li className="menu-item" onClick={() => {this.goTo(0)}}>HOME</li>
                    <li className="menu-item" onClick={() => {this.goTo(205)}}>ABOUT US</li>
                    <li className="menu-item" onClick={() => {this.goTo(1047)}}>OUR TEAMS</li>
                    <li className="menu-item" onClick={() => {this.goTo(1746)}}>CAREERS</li>
                    <li className="menu-item" onClick={() => {this.goTo(2488)}}>CONTACT US</li>
                  </ul>
                </Menu>
              </div>
            </navbar>
          </Mobile>
        </div>
    );
  }

  goTo = (index) => {
    scroll.scrollTo(index, {
      duration: 1500,
      delay: 100,
      smooth: true,
      containerId: 'ContainerElementID',
      offset: 50,
    })
  }

}
