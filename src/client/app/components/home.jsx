import React from "react"
import './styles/home.css';
import { Desktop, Mobile } from './device'
import Logo from './logo';

export default class Navbar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
  // background: url(/app/components/images/banner_label01.png) no-repeat center;

  render () {
    return (
      <div style={{position: 'relative', zIndex: 99}}>
        <section className="topSection">
          <article style={{width:'100%', height:'100%'}}>
            <Logo/>
          </article>
        </section>
      </div>

    );
  }
}
