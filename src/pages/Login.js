import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchToken from '../services/tokenApi';
import { actionToken } from '../store/actions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      isDisabled: true,
      nameInput: '',
    };
  }

   handleOnClick = async () => {
     const { history, addToken } = this.props;
     const data = await fetchToken();
     const { token } = data;
     console.log(token);
     addToken(token);
     localStorage.setItem('token', JSON.stringify(token));
     history.push('/game');
   }

  handleInputChange = ({ target: { id, value } }) => {
    this.setState({ [id]: value }, this.enableLoginButton);
  }

  enableLoginButton = () => {
    const { emailInput, nameInput } = this.state;

    if (emailInput && nameInput !== '') {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  render() {
    const { history } = this.props;
    const { emailInput, nameInput, isDisabled } = this.state;
    return (
      <div className="box_login">
        <h1> Login </h1>
        <label htmlFor="email">
          Email do gravatar:
          <input
            id="emailInput"
            type="email"
            data-testid="input-gravatar-email"
            name="email"
            value={ emailInput }
            onChange={ this.handleInputChange }
          />
        </label>
        <label htmlFor="name">
          Nome do jogador:
          <input
            type="text"
            id="nameInput"
            data-testid="input-player-name"
            name="name"
            value={ nameInput }
            onChange={ this.handleInputChange }
          />
        </label>
        <button
          className="play-button"
          type="button"
          data-testid="btn-play"
          disabled={ isDisabled }
          onClick={ this.handleOnClick }
        >
          Play!
        </button>
        <button
          className="config-button"
          type="button"
          data-testid="btn-settings"
          onClick={ () => history.push('/config') }
        >
          &#128736;
        </button>

        {/* <h1>
          { token }
        </h1> */}
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.obj,
  addToken: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addToken: (token) => dispatch(actionToken(token)),
});

export default connect(null, mapDispatchToProps)(Login);
