import React from 'react';
import { Query } from 'react-apollo';
import { Link } from '@reach/router';

import EVENTS_QUERY from '../queries/EventsQuery';

import EventsListLoading from './EventsListLoading';

const styles = {
  width: '1000px',
  margin: '0 auto',

  image: {
    maxWidth: '100%',
    width: '100%'
  },

  heading: {
    fontSize: '3rem',
    textAlign: 'center'
  },

  intro: {
    padding: '1rem 0',
    fontSize: '1.25rem',
    lineHeight: '1.5'
  }
}

const Events = ({ tid, hub }) => (
  <Query query={EVENTS_QUERY} variables={{ tid }}>
      {({ loading, error, data }) => {

        if (loading) return <EventsListLoading />;

        if (error) return <div>Error :(</div>;

        return (
          <div style={styles}>
            <h1 style={styles.heading}>Upcoming events</h1>
            <ul>
              {data.nodeQuery.events
                .map(event => <li><Link to={`/${hub}${event.url.path}`}>{event.title}</Link></li>)
              }
            </ul>
          </div>
        )
      }}
    </Query>
);

export default Events;
