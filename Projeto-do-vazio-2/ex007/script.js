var valor1 = Number(prompt("Digite o primeiro valor: "));
var valor2 = Number(prompt("Digite o segundo valor: "));
var valor3 = Number(prompt("Digite o terceiro valor: "));
var media = parseFloat(((valor1) + (valor2) + (valor3)) / 3);
var media = media.toFixed(2);
alert(`A média dos valores é ${media.toLocaleString('pt-BR', Style = 'currency', currency = 'BRL')}`); 
