import React from 'react';
import { Router } from '@reach/router';
import Nav from '../../components/Nav';
import Home from '../../components/Home';
import News from '../../components/News';
import Page from '../../components/Page';

const links = [
  { title: 'Home', path: "/library" },
  { title: 'Page', path: "/library/page" },
  { title: 'News', path: "/library/news" },
  { title: 'Events', path: "/library/events" }
]

const Library = () => (
  <>
    <Nav links={links} />
    <Router>
      <Home hubName="library" path="/" />
      <News path="/news" />
      <Page path="/*" />
    </Router>
  </>
);

export default Library;
