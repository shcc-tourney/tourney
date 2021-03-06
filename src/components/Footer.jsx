import React from 'react';
import { connect } from 'react-redux';
import './Footer.css';


const Footer = (props) => {
  const styles ={
    backgroundColor: props.fetching ? 'yellow' : props.connected ? 'var(--bright-green)' : 'var(--dark-red)'
  };
  
  return (
    <footer className='Footer'>
      <div><span className='hide-on-small-only'>Realtime Data Status</span> <span className='connection-dot' style={styles}></span></div>
      <div>&copy; 2018 Amazio Software</div>
    </footer>
  );
}

export default connect(
  (state) => ({
    connected: state.systemState.connected,
    fetching: (state.systemState.fetchingCount > 0),
  })
)(Footer);