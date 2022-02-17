import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Timer from './Timer';
import { actionGame } from '../store/actions';

class Answers extends Component {
  constructor() {
    super();
    this.state = {
      sortedPositions: [],
      correctAnswer: '',
      isDisabled: false,
      ATIVO: false,
      nextPage: false,
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
    this.setState({
      sortedPositions: shuffled,
      correctAnswer: result.results[index].correct_answer,
    });
  }

  handleClick = () => {
    this.setState({
      ATIVO: true,
    });
  }

  // redirectFeedBack = () => {
  //   const { history } = this.props;
  //   history.push('/feedback');
  // }

  handleNext = () => {
    const number = 4;
    const { updateIndex, index } = this.props;
    if (index === number) {
      this.setState({
        nextPage: true,
      });
    } else {
      updateIndex(1);
    }
  }

  // A fórmula para cálculo dos pontos por pergunta é: 10 + (timer * dificuldade), onde timer é o tempo restante no contador de tempo e dificuldade é hard: 3, medium: 2, easy: 1, dependendo da pergunta. Exemplo: Se no momento da resposta correta o timer estiver contando 17 segundos, e a dificuldade da pergunta é 2 (média), a pontuação deve ser: 10 + (17 * 2) = 44

  render() {
    const { sortedPositions, correctAnswer, isDisabled, ATIVO, nextPage } = this.state;
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
                  className={ ATIVO ? 'correctAnswer' : '' }
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
                  className={ ATIVO ? 'incorrectAnswer' : '' }
                >
                  { question }
                </button>
              )
          )) }
          <Timer
            ATIVO={ ATIVO }
            buttonDisabled={ this.buttonDisabled }
          />
          {ATIVO ? (
            <button
              type="button"
              data-testid="btn-next"
              onClick={ this.handleNext }
            >
              Next
            </button>
          ) : (
            null) }

          { nextPage ? <Redirect to="/feedback" /> : null}
        </div>
      </div>
    );
  }
}

Answers.propTypes = {
  index: PropTypes.number,
  addToken: PropTypes.func,
  updateIndex: PropTypes.func,
  history: PropTypes.obj,
}.isRequired;

const mapStateToProps = (state) => ({
  index: state.gameReducer.index,
});

const mapDispatchToProps = (dispatch) => ({
  updateIndex: (payload) => dispatch(actionGame(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
