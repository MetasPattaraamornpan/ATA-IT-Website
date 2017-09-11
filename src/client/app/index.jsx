import React from 'react';
// import MediaQuery from 'react-responsive';
import {render} from 'react-dom';
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
//
// Desktop, tablet and mobile setup
// const Desktop = ({ children }) => <Responsive minWidth={992} children={children} />;
// const Tablet = ({ children }) => <Responsive minWidth={768} maxWidth={992} children={children} />;
// const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />;
// <Desktop>You are a desktop or laptop</Desktop>
// <Tablet>You are a tablet</Tablet>
// <Mobile>You are a mobile phone</Mobile>

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Navbar />
          <p className="h1">Hi from react hackavan</p>
          <Footer />
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
