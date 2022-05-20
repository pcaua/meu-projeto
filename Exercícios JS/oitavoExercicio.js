function slownDown(velocity, printer){
    newVelocity = velocity
    printer(newVelocity)
    return newVelocity
}

let printVelocity = slownDown(150, velocity =>{
    while(velocity >= 0){
        velocity = velocity - 20
        alert(`A velocidade atual da nave está em ${velocity} KM/S`)
    }if(velocity < 0){
        velocity = 0
        alert(`A velocidade da nave está em ${velocity} KM/S`)
    }
    alert("Portas prontas para serem abertas!")
})