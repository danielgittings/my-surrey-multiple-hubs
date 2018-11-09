import React from 'react'
import { Link } from '@reach/router';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/library">Library</Link>
      <Link to="/wellbeing">Wellbeing</Link>
    </div>
  )
}
