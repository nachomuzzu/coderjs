const listado = document.getElementById("listado")



class Empleado {
    constructor(id, nombre, apellido, edad, ciudad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

const empleado1 = new Empleado("1", "Analia", "Morales", 24, "Villa Lynch");
const empleado2 = new Empleado("2", "Noelia Melina", "Lopez", 20, "Villa del Parque");
const empleado3 = new Empleado("3", "Florencia", "Gomez", 21, "Villa Devoto");

let empleados = [empleado1, empleado2, empleado3]

// Botones
 const boton1 = document.getElementById("agregar");
 boton1.addEventListener("click", () => {
     agregarEmpleado();
 })
 const boton2 = document.getElementById("eliminar");
 boton2.addEventListener("click", () => {
     eliminarEmpleado()
 })
 const boton3 = document.getElementById("listar");
 boton3.addEventListener("click", () => {
     listarEmpleados();
 })


function agregarEmpleado() {
    let id = Number(prompt("Ingrese ID del empleado"))
    let nombre = prompt("Ingrese nombre del empleado")
    let apellido = prompt("Ingrese apellido del empleado")
    let edad = Number(prompt("Ingrese edad del empleado"))
    let ciudad = prompt("Ingrese ciudad del empleado")
    let empleado = new Empleado(id, nombre, apellido, edad, ciudad)
    empleados.push(empleado)
}

function listarEmpleados() {
    let miLista = document.querySelector("#listaEmpleados");
    if (!miLista) {
        miLista = document.createElement("ul");
        miLista.setAttribute("id", "listaEmpleados");
        miLista.style.textAlign = 'center'
        miLista.style.listStyle = 'none'
        miLista.style.margin = '2em'
    }
    miLista.innerHTML = "";


    empleados.forEach((empleado) => {
        const nodoli = document.createElement("li");
        nodoli.innerHTML = `${empleado.id} ${empleado.nombre} ${empleado.apellido} ${empleado.edad} ${empleado.ciudad}`;
        miLista.appendChild(nodoli);
    });

    document.body.appendChild(miLista);
}

function eliminarEmpleado() {
    let id = prompt("Ingrese ID del empleado a eliminar")

    let encontrado = empleados.find((empleado) => empleado.id === id)

    if (!encontrado) {
        alert("Empleado no encontrado")
    } else {
        let index = empleados.indexOf(encontrado)
        empleados.splice(index, 1)
        console.log("borrar empleados")
        console.log(empleados);
        listarEmpleados()
    }

    console.log("Se encontró para borrar", encontrado);
}

