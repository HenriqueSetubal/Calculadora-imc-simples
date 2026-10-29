alert("Boas-vindas ao site de cálculo de peso!");

let peso = prompt("Digite seu peso (kg)").replace(',', '.');
let altura = prompt("Digite sua altura em metros (ex: 1.75)").replace(',', '.');

let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert("Você está abaixo do peso ideal");
} 
else if (imc > 25) {  
    alert("Você está acima do peso ideal");
} 
else { 
    alert("Você está no peso ideal");
}

document.getElementById("mensagem").innerText = "Seu IMC é: " + imc.toFixed(2);