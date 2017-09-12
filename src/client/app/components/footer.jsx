import React from "react"
import { style } from "./styles/footer.css"

class Footer extends React.Component{
  render(){
    return (
      <div className="footer">
        <div className="footerList">Test</div>
        <div className="social">facebook</div>
        <div className="social">twitter</div>
        <div className="social">instagam</div>
        <footer className="navbar navbar-fixed-bottom">
          <p className='h4'>Footer</p>
        </footer>
      </div>

    );
  }
}
export default Footer;
