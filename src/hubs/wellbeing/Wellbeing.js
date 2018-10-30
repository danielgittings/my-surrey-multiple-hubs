import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import Nav from '../../components/Nav';
import Home from '../../components/Home';
import News from '../../components/News';
import Page from '../../components/Page';

const Events = lazy(() => import('../../components/Events'));
const Event = lazy(() => import('../../components/Event'));

const links = [
  { title: 'Home', path: "/wellbeing" },
  { title: 'Page', path: "/wellbeing/page" },
  { title: 'News', path: "/wellbeing/news" },
  { title: 'Events', path: "/wellbeing/events"}
]

const hub = {
  name: 'wellbeing',
  tid: 2
}

const Library = () => (
  <>
    <Nav links={links} />
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Home hubName="wellbeing" path="/" />
        <News path="/news" />
        <Page path="/*" />
        <Events path="/events" tid={hub.tid} hub={hub.name} />
        <Event path="/events/:eventTitle" hub={hub.name} />
      </Router>
    </Suspense>
  </>
);

export default Library;