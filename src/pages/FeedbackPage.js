import React from 'react';
import Header from '../components/Header';

class FeedbackPage extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <h2 data-testid="feedback-total-score">
          0 pontos
          {/* { PONTUAÇÃO FINAL } */}
        </h2>

        {/* se (acertou 3 ou mais perguntas ) {
          return (<h1> Well Done! </h1>)
        } senão {
          <h1> Could be better... </h1>
        }
        <h2 data-testid="feedback-total-question">
          3 perguntas
        </h2> */}
      </section>
    );
  }
}
export default FeedbackPage;
