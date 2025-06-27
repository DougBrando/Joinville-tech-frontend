const dia = parseInt(prompt("Digite o dia da data: "));
const mes = parseInt(prompt("Digite o mês da data: "));
const ano = parseInt(prompt("Digite o ano da data: "));

// Define o número máximo de dias por mês
let maxDias;
if (mes === 2) maxDias = 28;
else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) maxDias = 30;
else maxDias = 31;

// Valida tudo em uma única condição
if (ano > 0 && ano < 9999 && mes >= 1 && mes <= 12 && dia >= 1 && dia <= maxDias) {
    console.log("Data válida");
} else {
    console.log("Data inválida");
}
