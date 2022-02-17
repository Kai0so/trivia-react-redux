import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timer from './Timer';

export default class Answers extends Component {
  constructor() {
    super();
    this.state = {
      sortedPositions: [],
      correctAnswer: '',
      isDisabled: false,
    };
  }

  componentDidMount() {
    this.shuffledAnswers();
  }

  buttonDisabled = () => {
    this.setState({ isDisabled: true });
  }

  shuffledAnswers = () => {
    const { result, index } = this.props;
    let allAnswers = result.results[index].incorrect_answers;
    allAnswers = [...allAnswers, result.results[index].correct_answer];

    const shuffled = allAnswers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    this.setState({
      sortedPositions: [],
    }, () => this.updateState(shuffled));
  }

  updateState = (shuffled) => {
    const { result, index } = this.props;
    console.log(shuffled);
    this.setState({
      sortedPositions: shuffled,
      correctAnswer: result.results[index].correct_answer,
    });
  }

  render() {
    const { sortedPositions, correctAnswer, isDisabled } = this.state;
    console.log(sortedPositions);
    return (
      <div>
        <div data-testid="answer-options" className="answers_game">
          { sortedPositions.map((question, i) => (
            (question === correctAnswer)
              ? (
                <button
                  key={ i }
                  type="button"
                  data-testid="correct-answer"
                  disabled={ isDisabled }
                  onClick={ this.handleClick }
                >
                  { question }
                </button>)
              : (
                <button
                  key={ i }
                  type="button"
                  data-testid={ `wrong-answer-${i}` }
                  disabled={ isDisabled }
                  onClick={ this.handleClick }
                >
                  { question }
                </button>
              )
          )) }
          <Timer
            buttonDisabled={ this.buttonDisabled }
          />
        </div>
      </div>
    );
  }
}

Answers.propTypes = {
  addToken: PropTypes.func,
}.isRequired;

// clear Interval
//