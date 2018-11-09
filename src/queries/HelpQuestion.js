import { gql } from 'apollo-boost';
const QUESTIONS_QUERY_CHILD = gql`
  query($tid: String!) {
    results: nodeQuery(filter: {conjunction: AND, conditions: [
      {operator: EQUAL, field: "type", value: "question_two"},
      {operator: EQUAL, field: "field_help_section", value: [$tid]}
      {operator: IS_NULL, field: "field_parent"}
    ]}) {
      questions: entities {
        title: entityLabel
        id: entityUuid
        nid: entityId
      }
    }
    # answers: nodeQuery(filter: {conjunction: AND, conditions: [
    #   {operator: EQUAL, field: "type", value: ["answer"]},
    #   {operator: EQUAL, field: "field_parent", value: [$nid]}
    # ]}) {
    #   ...on EntityQueryResult {
    #     answers: entities {
    #       ...on NodeAnswer {
    #         uuid
    #         title
    #         body {
    #           processed
    #         }
    #       }
    #     }
    #   }
    # }
  }
`;

export default QUESTIONS_QUERY_CHILD;
