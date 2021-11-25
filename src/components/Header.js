import React, { Component } from "react";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        
      <div className="logo">
    <h4 style={{margin:'0px',fontSize:"23px"}}>Navbar</h4>
      </div>
      <div className="span">
      <p>Aboutus</p>
      <p>ContactUs</p>
      <p>PROFIL</p>
      <p>SignIn</p>
      </div>
      </div>
    );
  }
}
export default Navbar;
