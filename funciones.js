function edad (){
    let edad=+prompt("Ingrese su edad")
    while (edad<0){
        print("Debe ingresar un numero mayor a 0")
        let edad=+prompt("Ingrese su edad")
    }
    return (edad)
    
}

alert("NO")