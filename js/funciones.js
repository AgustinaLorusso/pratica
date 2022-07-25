
/*Funcion que pide nombre,edad y un numero para ver si es par o impar y 
repite el ciclo de pedir un numero hasta que el usuario le diga que no quiere seguir*/
function parImpar(){
    let nombre = prompt("Ingrese su nombre");
    let edad= parseInt(prompt("Ingrese su edad"));
    let seguir="S";
    //Valido la edad
    while (edad<=0){
        alert("El numero ingresado no es valido,intente nuevamente");
        edad= parseInt(prompt("Ingrese su edad"));
    } 
    //Veo si el numero es par o impar viendo si el resto es igual a 0 o no 
    //y empiezo el ciclo que se va a repetir hasta que el usuario no quiera seguir
    while (seguir=="S"){
        let numero=parseInt(prompt("Ingrese un numero para saber si es par o impar"));
        if (numero%2==0){
            alert(nombre+",el numero "+numero+ " es par");
        }
        else{
            alert(nombre+",el numero "+numero+ " es impar");  
        }
        seguir=prompt(("Ingrese S si desea ingresar otro numero sino ingrese N"));
        seguir=seguir.toUpperCase();
    }

}

parImpar()

