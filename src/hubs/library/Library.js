import React from 'react';
import { Router } from '@reach/router';
import Nav from '../../components/Nav';
import Home from '../../components/Home';
import News from '../../components/News';
import Page from '../../components/Page';
import Events from '../../components/Events';
import Event from '../../components/Event';

const links = [
  { title: 'Home', path: "/library" },
  { title: 'Page', path: "/library/page" },
  { title: 'News', path: "/library/news" },
  { title: 'Events', path: "/library/events" }
]

const hub = {
  name: 'library',
  tid: 1
}

const Library = () => (
  <>
    <Nav links={links} />
    <Router>
      <Home hubName="library" path="/" />
      <News path="/news" />
      <Page path="/*" />
      <Events path="/events" tid={hub.tid} hub={hub.name}/>
      <Event path="/events/:eventTitle" />
    </Router>
  </>
);

export default Library;
