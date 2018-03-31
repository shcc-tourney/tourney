import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import userService from '../utils/userService';
import { userAuthenticated } from '../redux/actions/actionCreatorsUsers';
import { uiToast } from '../redux/actions/actionCreatorsUI';


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: ''
    };
  }

  updateField = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  login = (e) => {
    e.preventDefault();
    userService.login({email: this.state.email, pw: this.state.pw}).then(user => {
      this.props.userAuthenticated(user);
      user.admin ? this.props.history.push('/events') : this.props.history.push('/tote');
    }).catch(err => {
      this.props.uiToast({ html: err.message, classes: 'toast-error' });
    });
  }

  render() {
    return (
      <main className='LoginPage page-no-sidebar row'>
          <form ref={frm => this.form = frm} className="col s12">
            <div className="row">
              <div className="input-field col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" autoComplete="off" required
                  value={this.state.email} onChange={(e) => this.updateField('email', e)}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                <i className="material-icons prefix">security</i>
                <input id="password" type="password" className="validate" minLength={4} required
                  value={this.state.pw} onChange={(e) => this.updateField('pw', e)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3 right-align">
                <div>{this.state.message || ' '}</div>
                <button className="waves-effect waves-light btn-small"
                  disabled={!this.form || !this.form.checkValidity()} onClick={this.login}
                ><i className="material-icons left">check</i>LOG IN</button>
              </div>
            </div>
          </form>
      </main>
    );
  };
}

export default connect(
  (state) => ({
    user: state.userState.user
  }),
  {
    userAuthenticated,
    uiToast
  }
)(LoginPage);