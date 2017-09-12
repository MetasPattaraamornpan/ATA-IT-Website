import React from 'react';
import Responsive from 'react-responsive';
import {render} from 'react-dom';
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
//
// Desktop, tablet and mobile setup
const Desktop = ({ children }) => <Responsive minWidth={940} children={children} />;
const Mobile = ({ children }) => <Responsive maxWidth={940} children={children} />;

export default class App extends React.Component {
  render () {
    return (
        <div>
          <Navbar />
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Desktop>You are a desktop or laptop</Desktop>
          <Mobile>You are a mobile phone</Mobile>
          <Footer />
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
