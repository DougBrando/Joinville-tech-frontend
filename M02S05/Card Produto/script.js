const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
];


const selecaoGerao = document.getElementById('produtos');

produtos.forEach(produto => {

  const card = document.createElement('div');
  card.classList.add('cards');

  const tituloCard = document.createElement('h3');
  tituloCard.textContent = produto.nome;
  card.appendChild(tituloCard);

  const precoCard = document.createElement('p');
  precoCard.textContent = `R$${produto.preco.toFixed(2)}`;
  card.appendChild(precoCard);


  /* Forma abreviada
  card.innerHTML = `
  <h3> ${produto.nome} </h3>
  <p> preco:  R$${produto.preco.toFixed(2)} </p>
  `;
  */
  selecaoGerao.appendChild(card)
});
