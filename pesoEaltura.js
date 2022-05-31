var cont = 1;
var soma = 0;
var media = 0;
var pes = 0;
var pesEalt = 0;
var pesCinquenta = 0;
var pesNoventa = 0;

while (cont <= 7) {
  var alt = parseFloat(prompt("digite sua altura: "));
  var peso = parseFloat(prompt("digite seu peso: "));
  
  if (peso > 90) {
    pesNoventa++;
  }

  if (peso < 50 && alt < 1.60) {
    pesCinquenta++;
  }

  if (alt > 1.90 && peso > 100) {
    pesEalt++;
  }

  soma+=alt;
  

cont++;
}

media = (soma/7);

console.log("media da altura: ", media.toFixed(2));
console.log("mais de 90 kilos: ", pesNoventa);
console.log("menos de 50 kilos e menos de 1.60: ",pesCinquenta);
console.log("altura maior que 1.90 e peso maior que 100: ", pesEalt);