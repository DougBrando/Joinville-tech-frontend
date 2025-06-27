const regiao = prompt('Digite uma Região: ').toLowerCase();
const peso = parseFloat(prompt('Digite o Peso do Produto: '));

function calcularFrete(regiao, peso) {
    switch (regiao) {
        case 'norte': return 24 + (2.20 * peso);
        case 'nordeste': return 22 + (2.10 * peso);
        case 'centro-oeste': return 20 + (2.00 * peso);
        case 'sudeste': return 16 + (1.80 * peso);
        case 'sul': return 18 + (1.90 * peso);
        default: return 'Região inválida';
        }
    }
const frete = calcularFrete(regiao, peso);

console.log(frete);
