import React, { lazy, Suspense } from 'react';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import LazyImage from './LazyImage';

const styles = {
  width: '33.3333%',
  padding: '10px',
  boxSizing: 'border-box'
}

const loadingImg = <div className="album-img">
      <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
    </div>

const GridItem = ({ values, scrollPosition }) => (
  <div style={styles}>

    {/* <div style={{
      backgroundColor: 'red',
      width: '100%',
      height: `${values.image.derivative.height}px`
    }}>
      <LazyLoad height={values.image.derivative.height} offsetTop={10}>
        <img style={{ maxWidth: '100%'}} src={values.image.derivative.url} alt={values.image.alt} />
      </LazyLoad>
    </div> */}

    <Suspense fallback={loadingImg}>
      <LazyImage preview={values.image.imageStylePreview.url} src={values.image.derivative.url} alt={values.image.alt} />
    </Suspense>

    <h3>{values.title}</h3>
    <a href={values.link.url.path}>{values.link.title}</a>
  </div>
);

export default GridItem;