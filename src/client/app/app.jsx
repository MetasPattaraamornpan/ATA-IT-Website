import React from 'react';
import {render} from 'react-dom';
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
import Home from './components/home.jsx'
import { Desktop, Mobile } from './components/device'

export default class App extends React.Component {
  render () {
    return (
        <div>
          <Navbar />
          <Home />
          <Footer />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
