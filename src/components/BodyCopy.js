import React from 'react';

const styles = {
  lineHeight: '1.6'
}

const BodyCopy = ({values}) => (
  <div style={styles} dangerouslySetInnerHTML={{__html: values.body.value}} />
);

export default BodyCopy;
