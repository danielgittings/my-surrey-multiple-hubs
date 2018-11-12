import React from 'react';
import { trackWindowScroll }
  from 'react-lazy-load-image-component';
import GridItem from './GridItem';

const Grid = ({ values, scrollPosition }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', margin: '40px -10px' }}>
    {
      values.gridItems.map(item =>
        <GridItem scrollPosition={scrollPosition} values={item.gridItem} key={item.gridItem.id} />
      )
    }
  </div>
);

export default trackWindowScroll(Grid);