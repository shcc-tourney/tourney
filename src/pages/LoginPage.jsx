import React, { Component } from 'react';

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
                <button disabled={!this.form || !this.form.checkValidity()} className="waves-effect waves-light btn-small"><i className="material-icons left">person</i>log in</button>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  };
}

export default LoginPage;