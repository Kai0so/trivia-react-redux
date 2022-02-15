// export const fetchToken = () => {
//   fetch('https://opentdb.com/api_token.php?command=request')
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

async function fetchToken() {
  const url = 'https://opentdb.com/api_token.php?command=request';
  try {
    const retorno = await fetch(url);
    const resposta = await retorno.json();
    return resposta;
  } catch (error) {
    return error;
  }
}

export default fetchToken;
