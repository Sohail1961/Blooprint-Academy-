import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css'; // Change the import statement
import logo from '../../assets/bpa.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav); // Update the class name
  };

  const closeNavbar = () => {
    navRef.current.classList.remove(styles.responsive_nav); // Update the class name
  };

  return (
    <header>
      <img className={styles.logo} src={logo} alt="Logo" />
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
        <button
          className={`${styles['nav-btn']} ${styles['nav-close-btn']}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className={styles['nav-btn']} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
