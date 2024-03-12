const apiKey = `6da7002e5ec9559336503bb8`;
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

async function dolarCotacao() {
  try {
    const response = await fetch(url);
    const data = await response.json(); MessageEvent.getElementById
    document.getElementById('resultado').textContent = `1 USD = ${data.conversion_rates.BRL}`;
  } catch (error) {
    document.getElementById('resultado').textContent = `Falha ao buscar a cotação do dólar`;

  }
}

dolarCotacao();

/*// 'apiKey' é uma chave única que nos dá acesso a um serviço de cotação de moedas.
const apiKey = '6da7002e5ec9559336503bb8';

// 'url' é o endereço na internet de onde vamos obter as informações de cotação do dólar.
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

// 'dolarCotacao' é uma função assíncrona, o que significa que ela pode esperar por dados sem travar o resto do nosso programa.
async function dolarCotacao(){
try{
  // Tentamos obter os dados do serviço de cotação usando 'fetch', que é como se fosse uma chamada telefônica para a internet.
  const response = await fetch(url); 
  // Se a chamada for bem-sucedida, transformamos a resposta em um formato que o JavaScript pode entender, chamado JSON.
  const data = await response.json();
  // Aqui, atualizamos o conteúdo de um elemento na página web com a cotação atual do dólar em reais.
  document.getElementById('resultado').textContent = `1 USD = ${data.conversion_rates.BRL}`;
}catch(error){
  // Se algo der errado na chamada, mostramos uma mensagem de erro na página web.
  document.getElementById('resultado').textContent = `Falha ao buscar a cotação do dólar`;
}
}

// Finalmente, chamamos a função 'dolarCotacao' para executar tudo que definimos acima.
dolarCotacao();*/
