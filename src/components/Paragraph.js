import React from 'react';

import BodyCopy from './BodyCopy';
import Image from './Image';
import Grid from './Grid';


const PARAGRAPH_MAPPING = {
  body_copy: BodyCopy,
  image: Image,
  grid: Grid
}

const Paragraph = ({ type, values }) => {
  const ParagraphComponent = PARAGRAPH_MAPPING[type];
  return <ParagraphComponent values={values} />;
}

export default Paragraph;
