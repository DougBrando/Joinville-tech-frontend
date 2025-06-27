const numero = parseFloat(prompt('Digite um número: '));
const numero2 = parseInt(prompt('Digite o período do mês em número (1 a 12): '));

const capitalComposto = numero * (1 + 0.05) ** numero2;

console.log(capitalComposto);
