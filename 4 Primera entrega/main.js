let empleados = []

class Empleado {
    constructor(id, nombre, apellido, puesto) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.puesto = puesto
    }
}

function mostrarMenu() {
    let opcion = 0;

    while (opcion !== 4) {

        opcion = Number(prompt(`Seleccione una opción:  
                                1. Agregar empleado
                                2. Listar empleados
                                3. Eliminar empleado
                                4. Fin`));
        switch (opcion) {
            case 1: {
                agregarEmpleado();
                break;
            }
            case 2: {
                listarEmpleados();
                break;
            }
            case 3: {
                eliminarEmpleado();
                break;
            }
            case 4: {
                alert("MUCHAS GRACIAS");
            }
        }
    }
}

function agregarEmpleado() {
    let id = Number(prompt("Ingrese el ID"))
    let nombre = prompt("Ingrese nombre")
    let apellido = prompt("Ingrese apellido")
    let puesto = prompt("Ingrese puesto")
    let empleado = new Empleado(id, nombre, apellido, puesto)
    empleados.push(empleado)
}

function listarEmpleados() {
    console.log("ID NOMBRE APELLIDO PUESTO")
    empleados.forEach((empleado) => {
        console.log(empleado.id + " " + empleado.nombre + " " + empleado.apellido + " " + empleado.puesto)
    });
}

function eliminarEmpleado() {
    let id = Number(prompt("Ingrese el ID del empleado"));

    let busqueda = empleados.find((empleado) => empleado.id === id)

    if (!busqueda) {
        alert("ID no encontrada");
    }
    else {
        let index = empleados.indexOf(busqueda);

        empleados.splice(index, 1);
    }
}

mostrarMenu()
