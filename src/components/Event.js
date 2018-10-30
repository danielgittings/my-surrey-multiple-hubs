import React, { lazy, Suspense } from 'react';
import { Query } from 'react-apollo';

import EVENT_QUERY from '../queries/EventQuery';

// import Paragraph from '../components/Paragraph';

const Paragraph = lazy(() => import('../components/Paragraph'));

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

const Event = ({ eventTitle, hub }) => {
  const path = `/events/${eventTitle}`;

  return (
    <Query query={EVENT_QUERY} variables={{ path }}>
        {({ loading, error, data }) => {

          console.log(data);

          if (loading) return (
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{ fontSize: '1rem'}}>Loading...</p>
            </div>
          );

          if (error) return <div>Error :(</div>;

          if (!data.route) return (
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{ fontSize: '3rem'}}>Page not found</p>
            </div>
          );

          return (
            <div style={styles}>
            <Suspense fallback={'<div>...Loading</div>'}>

              {data.route.node.heroImage &&
                <img style={styles.image} src={data.route.node.heroImage.url} alt={data.route.node.heroImage.alt} />
              }

              {data.route.node.title &&
                <h1 style={styles.heading}>{data.route.node.title}</h1>
              }

              {data.route.node.body &&
                <div style={styles.intro} dangerouslySetInnerHTML={{ __html: data.route.node.body.value}} />
              }

              {
                data.route.node.paragraphs && data.route.node.paragraphs.map(item =>
                  <Paragraph type={item.paragraph.type} values={item.paragraph} key={item.paragraph.id} />
                )
              }
              </Suspense>
            </div>
          )
        }}
      </Query>
  )
};

export default Event;
