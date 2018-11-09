import React from 'react';
import { Link } from '@reach/router';

import { Query } from 'react-apollo';

import NavLoading from './NavLoading';
import MENU_QUERY from '../queries/MenuQuery';

const Nav = (props) => (
  <Query query={MENU_QUERY}>
  {({ loading, error, data }) => {

    if (loading) return <NavLoading />;

    if (error) return <div>Error :(</div>;

    // Get the menu items for this hub only
    let [ navLinks ] = data.menu.links
      .filter(hub => hub.url.path === `/${props.hubName}`);

    let hubLinks;
    const exploded = props.last.split('/')[0];


    if (exploded) {
      hubLinks = navLinks.links
        .filter(link => link.url.path === `/${props.hubName}/${exploded}`);
    } else {
      hubLinks = navLinks.links;
    }

    return (
      <>
      <nav style={{ minHeight: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '30px 0' }}>
        <ul style={{ width: '1000px', margin: '0 auto 0', display: 'inline-flex'}}>
          <Link to={`/${props.hubName}`}>{navLinks.label}</Link>
          {
            hubLinks.map(link =>
                <li key={link.label} style={{ display: 'flex', flexDirection: 'column', padding: '0 20px'}}>
                  <Link to={link.url.path}>{link.label}</Link>
                  <br />
                  <br />
                  {link.links.length > 0 && exploded &&
                    <ul style={{ display: 'flex', listStyle: 'none'}}>
                      {
                        link.links
                        .map(sub => <li><Link style={{ padding: '0 20px' }} to={sub.url.path}>{sub.label}</Link></li>)
                      }
                    </ul>
                  }
                </li>)
          }
        </ul>
      </nav>
      </>
    )
  }}
</Query>
);

export default Nav;
