const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let filteredPassenger = []

let spaceShipsUpperCase = []


hitchedSpaceships.forEach(function(element) {  
    
    spaceShipsUpperCase.push(element[0].toUpperCase())
    

    if(element[1] > 9){
        filteredPassenger.push(element[0])
    }
 })

const engaged = hitchedSpaceships.findIndex((element) => element.includes(true))

console.log(spaceShipsUpperCase)

console.log("Filtered Passengers",filteredPassenger)

console.log("Engaged", engaged + 1)

alert(`Naves que tem mais de 9 tripulantes: ${filteredPassenger} \nNúmero da plataforma que a primeira nave está engatada: ${engaged + 1} \nNome das aeronaves com texto maiúsculo: ${spaceShipsUpperCase} `)


/* 


1 - Filtrar o nome das naves que tem mais de 9 tripulantes

2 - Informar o número da plataforma em que está a primeira nave que ainda está com engate pendente
  Utilize a função findlndex, que é bem parecida com o find, mas retorna
  o índice de um filtro em vez do elemento do Array

3 - Destacar o nome de todas ds naves colando-as em caixa alta
 e exibindo

4 - Exibir um alerta mostrando todas as informações
*/
