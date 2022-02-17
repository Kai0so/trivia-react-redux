import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 30,
      ATIVO: false,
    };
  }

  componentDidMount() {
    this.countDown();
  }

  countDown = () => {
    const second = 1000;
    const interval = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds > 0 ? prevState.seconds - 1 : prevState.seconds,
      }));
      const { seconds } = this.state;
      const { buttonDisabled } = this.props;
      if (seconds === 0) {
        clearInterval(interval);
        buttonDisabled();
        this.setState(() => ({
          ATIVO: true,
        }));
      }
    }, second);
  }

  render() {
    const { seconds, ATIVO } = this.state;
    return (
      <h3>
        Timer:
        {ATIVO}
        {seconds}
      </h3>
    );
  }
}

Timer.propTypes = {
  disabledButtons: PropTypes.func,
}.isRequired;

export default Timer;
