//Algoritmo para repetir mensaje x cantidad de veces en consola y mostrar error al ingresar letras

//Pedir al usuario números
let numero = Number(prompt("Ingresa un número:"));
let repeticion = Number(
  prompt("Ingresa cuantas veces queres que se repita un número ")
);
let contador = 1;

// for(let i=0; i<repeticion;i++)
// {
//     console.log(numero)
// }

//Inicia ciclo
if (Number.isInteger(numero) && Number.isInteger(repeticion)) {
  while (contador <= repeticion) {
    console.log(numero);
    contador++;
  }
} else {
  alert("Uno de los datos ingresados no es un número");
}

// while (!/^[0-9]+$/.test(repeticion)) {
//     alert("Uno de los datos ingresados no es un número");
//     repeticion = prompt("Ingresa un número:");
// }
