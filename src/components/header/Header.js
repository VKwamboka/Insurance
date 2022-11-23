import React,{useState} from "react";
import {images} from "../../images"
import './header.scss'
import '../../scss/main.scss'

const Header = () => {
  const [open, setOpen] = useState(false)
  
  const handleClick = (e) =>{
    e.preventDefault();
    setOpen(!open)
  }
  return <div>
  <header>
    <nav className="navbar container">
      <div className="logo">
          <img src={images.logo} alt = 'logo'/>
      </div>
      <ul className={open ? "nav-items active" : 'nav-items'}>
          <li>About</li>
          {/* <li>Our Services</li> */}
          <li>Contact</li>
          <li>Portfolio</li>
          <li className="btn btn--nav-btn">View plans</li>
      </ul>
      <div className="hamburger">
        <img src={images.hamburger} alt='' onClick={handleClick}/>
      </div>
    </nav>
  </header>
  </div>;
};

export default Header;
