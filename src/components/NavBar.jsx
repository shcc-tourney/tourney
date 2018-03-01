import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';
import { userLoggedOut } from '../redux/actions/actionCreatorsUsers';
import userService from '../utils/userService';

class NavBar extends Component {

  logout = (e) => {
    e.preventDefault();
    userService.forgetMe();
    this.props.userLoggedOut();
  }

  componentDidMount() {
    let $el = window.$(".dropdown-button");
    if ($el.length) $el.dropdown();
  }

  render() {
    const rightSideNav = this.props.user ?
      <ul className="right hide-on-small-only">
        <li className='username'><i className="material-icons left">person</i>{this.props.user.name}</li>
        <li><a href="" onClick={this.logout}>Log Out</a></li>
      </ul>
      :
      <ul className="right hide-on-small-only">
        <li className={this.props.location.pathname === '/login' ? 'active' : ''}><Link to="/login">Log In</Link></li>
      </ul>;
  
    return (
      <div id='NavBar' className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="" id="menu-btn" className="left dropdown-button hide-on-large-only" data-target="dropdown1"><i className="material-icons">menu</i></a>
            <ul id="dropdown1" className="dropdown-content hide-on-large-only">
              <li className={this.props.location.pathname === '/odds' ? 'active' : null}><Link to="/odds">Live Odds</Link></li>
              {this.props.user &&
                <React.Fragment>
                  <li className={this.props.location.pathname === '/events' ? 'active' : null}><Link to="/events">Events</Link></li>
                  <li className={this.props.location.pathname === '/wagers' ? 'active' : null}><Link to="/wagers">Wagers</Link></li>
                  <li className={this.props.location.pathname === '/payouts' ? 'active' : null}><Link to="/payouts">Payouts</Link></li>
                </React.Fragment>
              }
            </ul>

            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li className={this.props.location.pathname === '/odds' ? 'active' : null}><Link to="/odds">Live Odds</Link></li>
              { this.props.user && 
                <React.Fragment>
                  <li className={this.props.location.pathname === '/events' ? 'active' : null}><Link to="/events">Events</Link></li>
                  <li className={this.props.location.pathname === '/wagers' ? 'active' : null}><Link to="/wagers">Wagers</Link></li>
                  <li className={this.props.location.pathname === '/payouts' ? 'active' : null}><Link to="/payouts">Payouts</Link></li>
                </React.Fragment>
              }
            </ul>
          </div>
          <div className='NavBar-logo'>
            <div>SHCC</div>
            <img src='/images/logo5.png' alt=''/>
            <div>Tourney</div>
          </div>
          <div className="nav-wrapper">
            { rightSideNav }
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.userState.user
  }),
  {
    userLoggedOut,
  }
)(NavBar);