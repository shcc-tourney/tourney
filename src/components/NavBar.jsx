import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';
import { userLoggedOut } from '../redux/actions/actionCreatorsUsers';
import userService from '../utils/userService';

const styles = {
  display: 'flex',
  justifyContent: 'space-between'
};

class NavBar extends Component {
  componentDidMount() {
    window.$(".dropdown-trigger").dropdown();
  }

  componentDidUpdate() {
    window.$(".dropdown-trigger").dropdown();
  }

  logout = (e) => {
    e.preventDefault();
    userService.forgetMe();
    this.props.dispatch(userLoggedOut());
  }

  render() {
    return (
      <div id='NavBar' className="navbar-fixed">
        <nav style={styles}>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-small-only">
              <li className={this.props.location.pathname === '/odds' ? 'active' : null}><Link to="/">Live Odds</Link></li>
              { this.props.user && 
                <React.Fragment>
                  <li className={this.props.location.pathname === '/events' ? 'active' : null}><Link to="/events">Events</Link></li>
                  <li className={this.props.location.pathname === '/wagers' ? 'active' : null}><Link to="/wagers">Wagers</Link></li>
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
            {
              this.props.user ?
                <React.Fragment>
                  <ul id="dropdown1" className="dropdown-content">
                    <li><a href="" onClick={this.logout}>Log Out</a></li>
                  </ul>
                  <ul id="nav-mobile" className="right hide-on-small-only">
                      <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons left">person</i>{this.props.user.name}</a></li>
                  </ul>
                </React.Fragment>
              :
                <ul id="nav-mobile" className="right hide-on-small-only">
                  <li className={this.props.location.pathname === '/login' ? 'active' : null}><Link to="/login">Log In</Link></li>
                </ul>
            }
          </div>
        </nav>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.userState.user
  })
)(NavBar);