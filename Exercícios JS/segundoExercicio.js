console.log(alert("Bem vindo ao sistema de navegação da nossa nave!"))

let velocidadeInicial = 0
let pilotName = prompt("Digite aqui seu nome, piloto.")

alert("Bem vindo a aeronave RocketLeague, piloto " + pilotName + " atualmente a aeronave está no seu ponto de partida, com " + velocidadeInicial + " km/s, iniciaremos sua jornada agora!")

let velocidadeDesejada = prompt("Qual a velocidade que você deseja alcançar ao decolar a aeroanave?")
confirm("A velocidade que você deseja é: " + velocidadeDesejada + " km/s")

if (velocidadeDesejada <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade")
} else if(velocidadeDesejada < 40){
    alert("Você está devagar, podemos aumentar mais a velocidade da nave, caso deseje!")
} else if(velocidadeDesejada >= 40 && velocidadeDesejada < 80){
    alert("Essa é uma boa velocidade para se manter!")
} else if(velocidadeDesejada >=80 && velocidadeDesejada < 100){
    alert("Você está se aproximando da velocidade de risco, considere diminuir!")
} else {
    alert("Você está em uma velocidade de risco, piloto automático forçado!")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocidadeDesejada + "km/s")