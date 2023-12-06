import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/main.css';
import logo from '../assets/bpa.png';
import { Link } from "react-router-dom";



function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      {/* <h3>LOGO</h3> */}
      <img className="logo" src={logo} />
      <nav ref={navRef}>
        <b>
          <Link to="/home">Home</Link>
        </b>
        <b>
          <Link to="/joblisting">Job Listing</Link>
        </b>
        <b>
          <Link to="/aboutus">About US</Link>
        </b>
        <b>
          <Link to="/blog">Blog</Link>
        </b>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
