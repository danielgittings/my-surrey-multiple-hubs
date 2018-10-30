import React from 'react';
import { Router } from '@reach/router';
import Nav from '../../components/Nav';
import Home from '../../components/Home';
import News from '../../components/News';
import Page from '../../components/Page';

const links = [
  { title: 'Home', path: "/wellbeing" },
  { title: 'Page', path: "/wellbeing/page" },
  { title: 'News', path: "/wellbeing/news" }
]

const Library = () => (
  <>
    <Nav links={links} />
    <Router>
      <Home hubName="wellbeing" path="/" />
      <News path="/news" />
      <Page path="/*" />
    </Router>
  </>
);

export default Library;