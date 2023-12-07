import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../Styles/main.css';
import logo from '../assets/bpa.png';
import { Link } from 'react-router-dom';

function Navbar() {
    
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const closeNavbar = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <nav ref={navRef}>
        <b>
          <Link to="/home" onClick={closeNavbar}>
            Home
          </Link>
        </b>
        <b>
          <Link to="/joblisting" onClick={closeNavbar}>
            Job Listing
          </Link>
        </b>
        <b>
          <Link to="/aboutus" onClick={closeNavbar}>
            About US
          </Link>
        </b>
        <b>
          <Link to="/blog" onClick={closeNavbar}>
            Blog
          </Link>
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
