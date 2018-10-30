import { gql } from 'apollo-boost';

export const EVENTS_QUERY = gql`
  query EventsList($tid: String!) {
    nodeQuery(filter: {conjunction:AND, conditions: [
      {operator: EQUAL, field: "type", value:["location"]},
      {operator: EQUAL, field: "field_hub", value: [$tid]},
      {operator: EQUAL, field: "status", value: ["1"]}
    ]}) {
      events: entities {
        title:entityLabel
        url: entityUrl {
          path
        }
      }
    }
  }
`;

export default EVENTS_QUERY;
