import React, {lazy, Suspense} from 'react';

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
    <Suspense fallback={'<div>...Loading</div>'}>
      <ParagraphComponent values={values} />
    </Suspense>
  );
}

export default Paragraph;
