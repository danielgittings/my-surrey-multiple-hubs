import { gql } from 'apollo-boost';
const QUESTIONS_ANSWERS_QUERY = gql`
  query($nid: String!) {
    results: nodeQuery(filter: {conjunction: AND, conditions: [
      {operator: EQUAL, field: "type", value: "question_two"},
      {operator: EQUAL, field: "field_parent", value: [$nid]}
    ]}) {
      questions: entities {
        title: entityLabel
        id: entityUuid
        nid: entityId
      }
    }
    answers: nodeQuery(filter: {conjunction: AND, conditions: [
      {operator: EQUAL, field: "type", value: ["answer"]},
      {operator: EQUAL, field: "field_relevant_questions", value: [$nid]}
    ]}) {
      ...on EntityQueryResult {
        answers: entities {
          ...on NodeAnswer {
            uuid
            title
            body {
              processed
            }
          }
        }
      }
    }
  }
`;

export default QUESTIONS_ANSWERS_QUERY;
