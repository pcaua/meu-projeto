let spaceShip = prompt("Qual o nome da sua espaçonave?")
let invalidCharacter = "e"
let reverseName = ""

for(i = spaceShip.length - 1; i >=0; i--){
    if(spaceShip[i] == invalidCharacter){
        break
    } else{
        reverseName += spaceShip[i]
    }
}

alert(`O nome da espaçonave é: ${spaceShip} \ne o nome oculto da espaçonave é: ${reverseName}`)