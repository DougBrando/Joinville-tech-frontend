const spanContador = document.getElementsByClassName('visor')[0];
const botaoAdicionar = document.getElementsByClassName('add')[0];
const botaoSubtrair = document.getElementsByClassName('sub')[0];
const botaoZerar = document.getElementsByClassName('zerar')[0];
let contador = 0;

botaoAdicionar.addEventListener('click', () => {
    contador += 1;
    spanContador.innerHTML = contador;
});
botaoSubtrair.addEventListener('click', () => {
    contador -= 1;
    spanContador.innerHTML = contador;
});
botaoZerar.addEventListener('click', () => {
    contador = 0;
    spanContador.innerHTML = contador;
});
