import React from "react";
import './input.scss';

import { connect } from "react-redux";
import { addQuestion, updateQuestion } from "../actions";
class Input extends React.Component {

  render() {
    return (
      <div>
        <input value={this.props.question} onChange={(event) => {this.props.onChangeQuestion(event.target.value)}}/>
        <button onClick={() => {
          this.props.onSubmitQuestion(this.props.question)
        }} >Preguntar</button>
      </div>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  }
}

const mapStateToProps = (state)  => {
  return {
    question: state.question
  }
}

const mapDispatchToProps = (dispatch) => 
({
    onSubmitQuestion: (question) => {
      return dispatch(addQuestion(question));
    },
    onChangeQuestion: (question) => {
      return dispatch(updateQuestion(question));
    } 
});

export default connect(mapStateToProps,mapDispatchToProps)(Input);