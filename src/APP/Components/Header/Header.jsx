import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    state = {  }

componentDidMount(){
    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
      box.addEventListener("click", (e) => {
        e.target.classList.toggle("active");
      });
    });
}
    render() { 
        return ( <>
        <div className="header">
<div className="container">
<div className="d-flex  justify-content-between pt-4 align-items-center">
<div >
    <p className="clark-logo">Clark Wagdy</p>
    <p className="clark-title">Front-End Developer</p>
    </div>

<div>
<button className="box b1">
  <div className="container-lignes">
    <div className="ligne"></div>
    <div className="ligne"></div>
    <div className="ligne"></div>
  </div>
</button>
</div>
</div>
    
</div>
        </div>
         </> );
    }
}
 
export default Header;