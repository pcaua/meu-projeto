alert("Pediremos algumas informações para fazer a diferença de idade entre vocês")

// As definições de variáveis V e N, são relacionadas a V de (Pessoa mais velha) e N(da pessoa mais nova.) 

var nomeV = prompt("Digite o nome da pessoa mais velha!")
var idadeV = prompt("Digite a idade da pessoa mais velha!")

var nomeN = prompt("Digite o nome da pessoa mais nova!")
var idadeN = prompt("Digite a idade da pessoa mais nova")

var calculo = idadeV - idadeN

alert(
    "Nome da pessoa mais velha: " + nomeV + "\nIdade da pessoa mais velha: " + idadeV + " anos" + "\n\nNome da pessoa mais nova: " + nomeN + "\n Idaded da pessoa mais nova: " + idadeN + " anos" + "\n\nA diferença de idade entre as duas é de: " + calculo + " anos"
)


/*
alert("Nome da pessoa mais nova: " +nomeN + "\n Idade da pessoa mais nova: " + idadeN)

alert("A diferença de idade de de vocês é de: " + calculo + " anos")
*/
