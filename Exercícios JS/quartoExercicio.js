let spaceShip = prompt("Escolha o nome para sua nave espacial!");
let dobra = null;
let turnDobra = null

if(spaceShip !== null && spaceShip !== "" && spaceShip !== undefined){
    turnDobra = prompt("Deseja entrar em uma dobra espacial? \n1 - Sim \n2 - Não")
    realizarDobras(turnDobra)
} else{
    alert("Você precisa nos informar o nome da sua nave para prosseguir!")
}

function realizarDobras(turnDobra){
    if(turnDobra == 1 || turnDobra == "sim" || turnDobra == "Sim" || turnDobra == "SIM"){
        dobra++
        while(turnDobra == 1 || turnDobra == "sim" || turnDobra == "Sim" || turnDobra == "SIM"){
            turnDobra = prompt("Deseja entrar em uma dobra espacial? \n1- Sim \n2- Não")
            dobra++
        } alert("Você utilizou a nave " + spaceShip + " para realizar " + dobra + " dobras")
    } else{
        alert("Você não utilizou a nave " + spaceShip + " para dobras espaciais")
    }
}