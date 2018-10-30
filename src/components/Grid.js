import React from 'react';
import GridItem from './GridItem';

const Grid = ({ values }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', margin: '40px -10px' }}>
    {
      values.gridItems.map(item =>
        <GridItem values={item.gridItem} key={item.gridItem.id} />
      )
    }
  </div>
);

export default Grid;