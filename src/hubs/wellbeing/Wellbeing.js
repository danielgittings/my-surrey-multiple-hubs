import React, {lazy, Suspense} from 'react';
import { Router } from '@reach/router';
import Nav from '../../components/Nav';
const Event = lazy(() => import('../../components/Event'));
const Page = lazy(() => import('../../components/Page'));
const HubHome = lazy(() => import('../../components/HubHome'));
const Events = lazy(() => import('../../components/Events'));
const News = lazy(() => import('../../components/News'));
const Help = lazy(() => import('../../components/Help'));

const hub = {
  name: 'wellbeing',
  tid: 2
}

const Library = (props) => (
  <>
    <Nav hubName={hub.name} last={props['*']} />
    <Suspense fallback={<div>...Loading</div>}>
      <Router>
        <HubHome hubName={hub.name} path="/" />
        <News path="/news" />
        <Page path="/*" />
        <Events path="/events" tid={hub.tid} hub={hub.name} />
        <Event path="/events/:eventTitle" />
        <Help path="/help" />
      </Router>
    </Suspense>
  </>
);

export default Library;
