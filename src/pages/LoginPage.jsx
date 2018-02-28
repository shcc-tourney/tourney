import React, { Component } from 'react';
import { connect } from 'react-redux';
import userService from '../utils/userService';
import { userAuthenticated } from '../redux/actions/actionCreatorsUsers';


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
      this.props.dispatch(userAuthenticated(user));
      this.props.history.push('/odds');
    }).catch(err => {
      window.M.toast({ html: err.message, classes: 'toast-error' });
    });
  }

  render() {
    return (
      <main className='page-no-sidebar'>
        <div className="container row">
          <form ref={frm => this.form = frm} className="col s12">
            <div className="row">
              <div className="input-field col s4 offset-s4">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" autoComplete="off" required
                  value={this.state.email} onChange={(e) => this.updateField('email', e)}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4 offset-s4">
                <i className="material-icons prefix">security</i>
                <input id="password" type="password" className="validate" minLength={4} required
                  value={this.state.pw} onChange={(e) => this.updateField('pw', e)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s4 offset-s4 right-align">
                <div>{this.state.message || ' '}</div>
                <button className="waves-effect waves-light btn-small"
                  disabled={!this.form || !this.form.checkValidity()} onClick={this.login}
                ><i className="material-icons left">check</i>LOG IN</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  };
}

export default connect(
  (state) => ({
    user: state.userState.user
  })
)(LoginPage);