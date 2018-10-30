import React from 'react';

const styles = {
  width: '33.3333%',
  padding: '10px',
  boxSizing: 'border-box'
}

const GridItem = ({ values }) => (
  <div style={styles}>
    <img style={{ width: '100%' }}src={values.image.derivative.url} alt={values.image.alt} />
    <h3>{values.title}</h3>
    <a href={values.link.url.path}>{values.link.title}</a>
  </div>
);

export default GridItem;