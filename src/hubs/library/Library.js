import React, {lazy, Suspense} from 'react';
import { Router } from '@reach/router';
const Nav = lazy(() => import('../../components/Nav'));
const Home = lazy(() => import('../../components/Home'));
const News = lazy(() => import('../../components/News'));
const Page = lazy(() => import('../../components/Page'));
const Events = lazy(() => import('../../components/Events'));
const Event = lazy(() => import('../../components/Event'));

const hub = {
  name: 'library',
  tid: 1
}

const Library = (props) => (
  <>
    <Suspense fallback={'<div>...Loading</div>'}>
      <Nav hubName={hub.name} last={props['*']} />
      <Router>
        <Home hubName={hub.name} path="/" />
        <News path="/news" />
        <Page path="/*" />
        <Events path="/events" tid={hub.tid} hub={hub.name}/>
        <Event path="/events/:eventTitle" />
      </Router>
    </Suspense>
  </>
);

export default Library;
