import React, { Component } from 'react'
import { Query } from 'react-apollo';
import CATEGORIES_QUERY from '../queries/HelpCategories';
import QUESTIONS_ANSWERS_QUERY from '../queries/QuestionsAnswersQuery';
import Loading from './Loading';

const buttonStyles = {
  border: 0,
  fontSize: '1rem',
  backgroundColor: 'white',
  cursor: 'pointer',
}

class Help extends Component {
  state = {
    parentQuestionId: null,
    step: 0,
    trail: []
  }

  setParent = (parent) => {
    const { nid, title } = parent;
    this.setState(prevState => {
      return {
        parentQuestionId: nid,
        step: prevState.step + 1,
        trail: [...prevState.trail, { nid, title }]
      }
    });
  }

  reset = () => {
    this.setState({
      parentQuestionId: null,
      trail: [],
      step: 0
    });
  }

  breadcrumbNavigate = (item) => {
    // Find array index of clicked item
    const trailId = this.state.trail.findIndex(question => question.nid === item.nid);

    this.setState(prevState => {
      return {
        parentQuestionId: prevState.trail[trailId].nid,
        trail: prevState.trail.slice(0, trailId + 1),
        step: trailId + 1
      }
    });
  }

  render() {
    const { parentQuestionId, step, trail } =  this.state;

    let QUERY;

    // Decide which query we want
    // If we don't have a parentQuestionId then we don't care about getting
    // answers yet.
    // If we do have an id then we should get answers as well as child questions
    if (parentQuestionId === null) {
      QUERY = CATEGORIES_QUERY;
    } else {
      QUERY = QUESTIONS_ANSWERS_QUERY;
    }

    return (
      <div style={{ width: '1000px', margin: '0 auto'}}>
        <button disabled={!parentQuestionId} onClick={this.reset}>Reset</button>
        {trail.map(item =>
          <button style={buttonStyles} key={`trail-button-${item.nid}`} onClick={() => this.breadcrumbNavigate(item)}>{item.title}<span> ></span></button>
        )}

        <hr/>
        <Query
          query={QUERY}
          variables={{
            nid: parentQuestionId
          }}>
          {({ loading, error, data }) => {

            if (loading) return <Loading />;
            if (error) return <div>Error :(</div>;

            let gotQuestions = false;
            let gotAnswers = false;

            if (data.results && data.results.questions.length > 0) {
              gotQuestions = true;
            }

            if (data.answers && data.answers.answers.length > 0) {
              // Got some answers
              gotAnswers = true;
            }

            return (
              <div>
                <div style={{ width: '400px', margin: '0 auto', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                  {/* Step 1 show top level questions */}
                  {(step === 0 && gotQuestions) && data.results.questions.map(question => (
                    <button style={{ cursor: 'pointer', display: 'block', margin: '10px 0', padding: '15px', backgroundColor: '#08c', color: 'white', border: 'none', fontSize: '1.25rem'}} key={question.id} onClick={() => this.setParent(question)}>{question.title}</button>
                  ))}

                  {/* Step 2 show child questions */}
                  {(step === 1 && gotQuestions) && data.results.questions.map(question => (
                    <button style={{ cursor: 'pointer', display: 'block', margin: '10px 0', padding: '15px', backgroundColor: '#08c', color: 'white', border: 'none', fontSize: '1.25rem'}} key={question.id} onClick={() => this.setParent(question)}>{question.title}</button>
                  ))}

                  {/* Step 3 show question if we have any, answers if we don't */}
                  {step === 2 && gotQuestions ? data.results.questions.map(question => (
                    <button style={{ cursor: 'pointer', display: 'block', margin: '10px 0', padding: '15px', backgroundColor: '#08c', color: 'white', border: 'none', fontSize: '1.25rem'}} key={question.id} onClick={() => this.setParent(question)}>{question.title}</button>
                  )) : null}

                </div>

                {(step === 2 && gotAnswers && !gotQuestions) ? data.answers.answers.map(answer => (
                    <div key={answer.uuid}>
                      <h3>{answer.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: answer.body.processed }} />
                    </div>
                  )) : null
                }

                {/* Step 4 show answers */}
                {(step === 3 && gotAnswers) && data.answers.answers.map(answer => (
                  <div key={answer.uuid}>
                    <h3>{answer.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: answer.body.processed }} />
                  </div>
                ))}

                {(step === 3 && !gotAnswers) && <h3>Couldn't find any answers to that question.</h3>}

                {(step === 2 && !gotAnswers && !gotQuestions) && <h3>Couldn't find any answers to that question.</h3>}
              </div>
            )
          }}
        </Query>
      </div>
    );
  }
}

export default Help
