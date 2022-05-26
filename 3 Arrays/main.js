// Programa para agregar datos de empleados, al elegir la opción 'Fin' el array se mostrará en la consola.
let empleados = []

class Empleado{
    constructor(nombre,apellido, puesto){
        this.nombre=nombre
        this.apellido=apellido
        this.puesto=puesto
    }
}

function mostrarMenu(){
    let opcion = 0 

    while(opcion!==2) {

        opcion = Number(prompt(`Seleccione una opción:  
                                1. Agregar usuario
                                2. Fin`))
        switch(opcion){
            case 1:{
                agregarEmpleado()
            }
            case 2:{
                alert("MUCHAS GRACIAS")
            }
        } 
    }
}

function agregarEmpleado(){
    let nombre = prompt("Ingrese nombre")
    let apellido = prompt("Ingrese apellido")
    let puesto = prompt("Ingrese puesto")
    let empleado = new Empleado(nombre, apellido, puesto)
    empleados.push(empleado)
}

function listarUsuarios(){
    listarUsuarios.forEach
}

console.log(empleados);
mostrarMenu()
