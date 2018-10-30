import { gql } from 'apollo-boost';

export const MENU_QUERY = gql`
  query {
    menu: menuByName(name: "main") {
      links {
        url {
          path
        }
        label
        links {
          url {
            path
          }
          label
          links {
            url {
              path
            }
            label
          }
        }
      }
    }
  }
`;

export default MENU_QUERY;
