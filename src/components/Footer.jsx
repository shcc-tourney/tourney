import React from 'react';
import { connect } from 'react-redux';
import './Footer.css';


const Footer = (props) => {
  const styles ={
    backgroundColor: props.connected ? 'var(--bright-green)' : 'var(--dark-red)'
  };
  
  return (
    <footer className='Footer'>
      <div>Realtime Connection Status <span style={styles}></span></div>
      <div>&copy; 2018 Amazio Software</div>
    </footer>
  );
}

export default connect(
  (state) => ({
    connected: state.systemState.connected
  })
)(Footer);