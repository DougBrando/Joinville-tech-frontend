let frase = prompt("Digite uma frase:");
let fraseCapitalizada = frase
.toLowerCase()
.split(" ")
.map(p => p[0].toUpperCase() + p.slice(1))
.join(" ");
console.log(fraseCapitalizada);
