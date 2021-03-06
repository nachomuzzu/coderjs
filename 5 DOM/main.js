const saludo = document.getElementById("saludo")
const listado = document.getElementById("listado")
const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")
saludo.innerHTML = `<b>¡Hola, ${nombre} ${apellido}!</b>`


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

const boton1 = document.getElementById("menu");
boton1 = addEventListener("click", () =>{
    listadoEmpleados();
})

function listadoEmpleados() {

    let empleados = [empleado1, empleado2, empleado3]

    mostMenu()

    function mostMenu() {
        let opcion = 0

        while (opcion !== 4) {

            opcion = Number(prompt(`Seleccione una opción:   1. Agregar empleado
                                    2. Listar empleado
                                    3. Eliminar empleado
                                    4. Finalizar`))
            switch (opcion) {
                case 1: {
                    agregarEmpleado()
                    break
                }
                case 2: {
                    listarEmpleados()
                    break
                }
                case 3: {
                    eliminarEmpleado()
                    break
                }
                case 4: {
                    alert("MUCHAS GRACIAS")
                    break
                }
            }
        }
    }

    function agregarEmpleado() {
        let id = Number(prompt("Ingrese ID del empleado"))
        let nombre = prompt("Ingrese su nombre")
        let apellido = prompt("Ingrese su apellido")
        let edad = Number(prompt("Ingrese su edad"))
        let ciudad = prompt("Ingrese su ciudad")
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
        }

        console.log("Se encontró para borrar", encontrado);
    }
    console.log("Estos son sus empleados")
    console.log(empleados);
}