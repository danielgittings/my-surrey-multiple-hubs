import React from 'react'
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <div style={{ minHeight: '200px',height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <ReactLoading type={'spin'} color={'#eee'} delay={0}/>
    </div>
  )
}
