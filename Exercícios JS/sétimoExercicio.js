let spaceShip = prompt("Seja bem vindo ao nosso programa de bordo, por favor, nos informe o nome da sua nave!")
let velocity = 0
let choseOption 
options()

function acelerate(){
    velocity += 5
    return velocity
}

function desacelerate(){
    velocity -= 5
    if(velocity < 0){
        alert("Sua velocidade não pode ser inferior a 0 KM/S")
        return velocity = 0
    }
    return velocity
}


function options(choseOption){
    choseOption = prompt("O que deseja fazer? \n1 - Acelerar \n2 - Desacelerar \n3 - Fechar o programa de bordo.")
    while(choseOption == 1){
        acelerate()
        options()
        break
    }
    while(choseOption == 2){
        desacelerate()
        options()
        break
    }
    while(choseOption == 3){
        alert("Você resolveu manter sua velocidade atual em: " + velocity + "KM/S")
        break
    } if(choseOption > 3){
        alert("Por favor, escolha uma opção válida!")
        options()
    } else if(choseOption <= 0){
        alert("Por favor, escolha uma opção válida!")
        options()
    } else if(choseOption == null){
        alert("Por favor, escolha uma opção válida!")
        options()
    }

}
