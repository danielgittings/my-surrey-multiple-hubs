import React from 'react';
import { Query } from 'react-apollo';
import Paragraph from './Paragraph';

import { PAGE_QUERY } from '../queries/PageQuery';

import PageLoading from './PageLoading';

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

const Page = (props) => {
  const path = `/${props.location.pathname}`;

  return (
    <Query query={PAGE_QUERY} variables={{ path }}>
      {({ loading, error, data }) => {

        if (loading) return <PageLoading />;

        if (error) return <div>Error :(</div>;

        if (!data.route) return (
          <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p style={{ fontSize: '3rem'}}>Page not found</p>
          </div>
        );

        return (
          <div style={styles}>
            {/* <Nav urlSegmentFirst={urlSegmentFirst} urlSegmentSecond={urlSegmentSecond} /> */}

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
              data.route.node.paragraphs.map(item =>
                <Paragraph type={item.paragraph.type} values={item.paragraph} key={item.paragraph.id} />
              )
            }
          </div>
        )
      }}
    </Query>
  )
};

export default Page;