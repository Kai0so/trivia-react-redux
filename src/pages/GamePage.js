import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import fetchTrivia from '../services/questionsApi';
import fetchToken from '../services/tokenApi';
import { actionToken } from '../store/actions';
import Loading from '../components/Loading';
import Answers from '../components/Answers';

class GamePage extends React.Component {
  constructor() {
    super();
    this.state = {
      triviaCode: {},
      result: {},
      apiLoading: true,
      indexQuestion: 0,
    };
  }

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch = async () => {
    const getToken = localStorage.getItem('token');
    const resposta = await fetchTrivia(getToken);
    this.setState({
      triviaCode: resposta.response_code,
      result: resposta,
    }, this.apiResponse);
  }

    apiResponse = async () => {
      const INVALID_RESPONSE_CODE = 3;
      const { addToken } = this.props;
      const { triviaCode } = this.state;
      if (triviaCode === INVALID_RESPONSE_CODE) {
        const data = await fetchToken();
        const { token } = data;
        addToken(token);
        localStorage.setItem('token', token);
        const response = await fetchTrivia(token);
        this.setState({
          result: response,
          apiLoading: false,
        });
      }
      this.setState({ apiLoading: false });
    }

    render() {
      const { result, apiLoading, indexQuestion } = this.state;

      return (
        <>
          <Header />
          {apiLoading ? (
            <Loading />
          ) : (

            <section>

              <Answers
                result={ result }
                index={ indexQuestion }
                type={ result.results[indexQuestion].type }
              />
            </section>)}
        </>
      );
    }
}

GamePage.propTypes = {
  addToken: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addToken: (token) => dispatch(actionToken(token)),
});

export default connect(null, mapDispatchToProps)(GamePage);
