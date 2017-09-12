import React from "react"
import './styles/navbar.css';

const Navbar = () => (
  <navbar className='navbar navbar-default navbar-static-top'>
    <div className="navNarrow">
      <div className="narrowLinks">
        <img src="./app/components/images/logo.jpg" />
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </navbar>
)

export default Navbar;

// class Navbar extends React.Component{
//   render(){
//     return (
//       <nav className='navbar navbar-default navbar-static-top'>
//         <div className="navNarrow">
//           <div className="narrowLinks">
//             <img src="./app/components/images/logo.jpg" />
//             <a href="#">Link 1</a>
//             <a href="#">Link 2</a>
//             <a href="#">Link 3</a>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }
// export default Navbar;
