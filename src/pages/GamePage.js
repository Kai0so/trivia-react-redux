import React from 'react';

class GamePage extends React.Component {
  render() {
    return (
      <section>
        <h2 data-testid="question-category">
          Política
          {/* { CATEGORIA DA PERGUNTA } */}
        </h2>
        <h2 data-testid="question-text">
          Jeb Bush was elected as Governor of
          Florida in 2002, starting his political career.
          {/* { TEXTO DA PERGUNTA} */}
        </h2>
        <div data-testid="answer-options">
          <button type="button" data-testid="correct-answer">
            {/* Resposta correta */}
          </button>
          <button type="button" data-testid="">
            {/* Resposta errada
              data-testid="wrong-answer-${index}" com index começando com 0
            */}
          </button>
          <button type="button" data-testid="">
            {/* Resposta errada
              data-testid="wrong-answer-${index}" com index começando com 0
            */}
          </button>
          <button type="button" data-testid="">
            {/* Resposta errada
              data-testid="wrong-answer-${index}" com index começando com 0
            */}
          </button>
        </div>

      </section>
    );
  }
}
export default GamePage;
