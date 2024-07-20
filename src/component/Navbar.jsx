import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
// import { ThemeContext } from '../ContextAPI/ThemeContext';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
         Nihal sharma
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/togglefunc" className="nav-link" onClick={toggleMenu}>Functional Components</Link>
          </li>
          <li className="nav-item">
            <Link to="/routingcheck" className="nav-link" onClick={toggleMenu}>Routing Check</Link>
          </li>
          <li className="nav-item">
            <Link to="/userlist" className="nav-link" onClick={toggleMenu}>User Data</Link>
          </li>
          <li className="nav-item">
            <Link to="/datafetch" className="nav-link" onClick={toggleMenu}>Employee Feedback Form</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/themecontext" className="nav-link" onClick={toggleMenu}>Theme Context</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;