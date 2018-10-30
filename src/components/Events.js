import React from 'react';
import { Query } from 'react-apollo';
import { Link } from '@reach/router';

import EVENTS_QUERY from '../queries/EventsQuery';

const Events = ({ tid, hub }) => (
  <Query query={EVENTS_QUERY} variables={{ tid }}>
      {({ loading, error, data }) => {

        if (loading) return (
          <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{ fontSize: '1rem'}}>Loading...</p>
          </div>
        );

        if (error) return <div>Error :(</div>;

        return (
          <div>
            <h1>Upcoming events</h1>
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
