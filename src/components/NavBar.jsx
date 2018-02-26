import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left hide-on-small-only">
          <li className={props.location.pathname === '/odds' ? 'active' : null}><Link to="/">Live Odds</Link></li>
          <li className={props.location.pathname === '/events' ? 'active' : null}><Link to="/events">Events</Link></li>
          <li className={props.location.pathname === '/wagers' ? 'active' : null}><Link to="/wagers">Wagers</Link></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavBar;