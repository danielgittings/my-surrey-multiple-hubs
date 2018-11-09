import React from 'react';
import { Link } from '@reach/router';

const styles = {
  width: '1000px',
  margin: '0 auto',

  image: {
    maxWidth: '100%',
    width: '100%'
  },

  heading: {
    fontSize: '3rem',
    textAlign: 'center'
  },

  intro: {
    padding: '1rem 0',
    fontSize: '1.25rem',
    lineHeight: '1.5'
  }
}

const HubHome = ({ hubName }) => (
  <div style={styles}>
    <h1 style={styles.heading}>This is the {hubName} home</h1>
  </div>
);

export default HubHome;
