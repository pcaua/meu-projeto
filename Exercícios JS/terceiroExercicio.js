let anosLuz = prompt("Escolha quantos anos luz você deseja converter: ")

let chosenOption = prompt("Escolha uma medida de conversão:\n1 - Parsec(pc). \n2 - Unidade Astrônomica(AU). \n3 - Quilômetros(km). ")

let chosenUnity
let distanciaConvertida

switch(chosenOption){
    case "1":
        chosenUnity = "Parsec"
        distanciaConvertida = anosLuz * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astrônomica"
        distanciaConvertida = anosLuz * 63241,1
        break
    case "3":
        chosenUnity = "Quilômetros"
        distanciaConvertida = anosLuz * 9.5 * Math.pow(10, 12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        distanciaConvertida = "Conversão fora do escopo"
}

alert("Distância em anos luz: " + anosLuz + "\n" + chosenUnity + ": " + distanciaConvertida) 

/*switch(distanciaConvertida){
    case "1":
        newValue = anosLuz * 0.306601
        alert("O valor da conversão é: " + newValue + "PC")
        break
    
    case "2":
        newValue = anosLuz * 63241,1
        alert("O valor da conversão é: " + newValue + "AU")
        break
    case "3":
        newValue = anosLuz * Math.pow(10, 12)
        alert("O valor da conversão é: " + newValue + "KM")
        break
    default:
        alert("Distância em anos luz: " + anosLuz + " unidade não identificada, conversão fora do escopo.")
}*/