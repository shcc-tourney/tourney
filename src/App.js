import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="left hide-on-small-only">
                <li><a href="/odds">Live Odds</a></li>
                <li><a href="/events">Events</a></li>
                <li><a href="/wagers">Wagers</a></li>
              </ul>
              <form className="right">
                <div className="input-field">
                  <input id="search" type="search" required/ >
                  <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                  <i className="material-icons">close</i>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default App;
