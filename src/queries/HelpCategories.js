import { gql } from 'apollo-boost';

const QUESTIONS_QUERY = gql`
  # query {
  #   results: taxonomyTermQuery(filter: {conjunction: AND, conditions: [
  #     {operator: EQUAL, field: "vid", value: ["help"]}
  #   ]}) {
  #     categories: entities {
  #       title: entityLabel
  #       id: entityUuid
  #       ...on TaxonomyTerm {
  #         tid
  #       }
  #     }
  #   }
  # }
  query {
    results: nodeQuery(filter: {
      conjunction: AND,
      conditions: [
        {operator: EQUAL, field: "type", value: "question_two"},
        {operator: EQUAL, field: "field_top_level", value: "1"}
      ]
    }) {
      count
      questions: entities {
        ...on NodeQuestionTwo {
          title: entityLabel
          id: uuid
          nid
        }
      }
    }
  }
`;

export default QUESTIONS_QUERY;
