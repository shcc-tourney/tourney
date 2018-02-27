import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const styles = {
  display: 'flex',
  justifyContent: 'space-between'
};

const NavBar = (props) => (
  <div id='NavBar' className="navbar-fixed">
    <nav style={styles}>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-small-only">
          <li className={props.location.pathname === '/odds' ? 'active' : null}><Link to="/">Live Odds</Link></li>
          <li className={props.location.pathname === '/events' ? 'active' : null}><Link to="/events">Events</Link></li>
          <li className={props.location.pathname === '/wagers' ? 'active' : null}><Link to="/wagers">Wagers</Link></li>
        </ul>
      </div>
      <div className='NavBar-logo'>
        <div>SHCC</div>
        <img src='/favicon.png' alt=''/>
        <div>Tourney</div>
      </div>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-small-only">
          <li className={props.location.pathname === '/login' ? 'active' : null}><Link to="/login">Log In</Link></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;