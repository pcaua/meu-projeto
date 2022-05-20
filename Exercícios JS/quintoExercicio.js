let spaceShip = prompt("Qual o nome da sua espaçonave?")
let changeCharacter = prompt("Qual caractere você deseja substitur?")
let substitute = prompt("Por qual caracter você deseja trocar?")
let newSpaceShip = ""

for(let i = 0; i < spaceShip.length; i++){
    if(spaceShip[i] == changeCharacter){
        newSpaceShip += substitute
    } else{
        newSpaceShip += spaceShip[i]
    }
}

alert("O nome da sua espaçonave é: " + newSpaceShip)