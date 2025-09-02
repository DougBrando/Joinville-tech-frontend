const navItens = ["Home", "Sobre", "Contato"];
const navMenu = document.getElementById('menu');

const ul = document.createElement('ul');

navItens.forEach(item => {

  /* modo mais completo
  const li = document.createElement('li');
  ul.appendChild(li);

  const itemLink = document.createElement('a');
  li.appendChild(itemLink);

  itemLink.textContent = item;
  itemLink.href = `#${item.toLowerCase()}`;
  */

  // modo simplificado
  const li = document.createElement('li');
  li.innerHTML = `
              <a href="#${item.toLowerCase()}">${item}</a>
          `;
  ul.appendChild(li);
  ;
});

navMenu.appendChild(ul);
