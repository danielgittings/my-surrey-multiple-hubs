import React from 'react';

const Image = ({ values }) => (
  <div style={{ margin: '30px 0' }}>
    <img style={{ maxWidth: '100%', display: 'inline-flex', margin: '30px 0' }} src={values.image.imageStyleBanner.url} alt={values.image.alt} />
  </div>
);

export default Image;
