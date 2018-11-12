import React from 'react';
import LazyLoad from 'react-lazy-load';

const Image = ({ values }) => (
  <LazyLoad style={{ backgroundColor: '#eeeeee', margin: '0 30px'}} height={values.image.imageStyleBanner.height} offsetTop={10}>
    <img style={{ backgroundColor: '#eeeeee', width: '100%', height: '500px', maxWidth: '100%', display: 'inline-flex' }} src={values.image.imageStyleBanner.url} alt={values.image.alt} />
  </LazyLoad>
);

export default Image;
