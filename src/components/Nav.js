import React from 'react';
import { Link } from '@reach/router';

const Nav = ({ links }) => (
  <nav>
    <ul>
      {
        links.map(link => (
          <Link to={link.path}>{link.title}</Link>
        ))
      }
    </ul>
  </nav>
);

export default Nav;
