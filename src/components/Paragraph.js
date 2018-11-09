import React, {lazy, Suspense} from 'react';

import ImageLoading from './ImageLoading';

const BodyCopy = lazy(() => import('./BodyCopy'));
const Image = lazy(() => import('./Image'));
const Grid = lazy(() => import('./Grid'));

const PARAGRAPH_MAPPING = {
  body_copy: BodyCopy,
  image: Image,
  grid: Grid
}

const Paragraph = ({ type, values }) => {
  const ParagraphComponent = PARAGRAPH_MAPPING[type];
  return (
    <Suspense fallback={<ImageLoading />}>
      <ParagraphComponent values={values} />
    </Suspense>
  );
}

export default Paragraph;
