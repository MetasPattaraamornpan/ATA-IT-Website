import React from 'react';
import {render} from 'react-dom';
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
import { Desktop, Mobile } from './components/device'

export default class App extends React.Component {
  render () {
    return (
        <div>
          <Navbar />
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Desktop>You are a desktop or laptop</Desktop>
          <Mobile>You are a mobile phone</Mobile>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Footer />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
