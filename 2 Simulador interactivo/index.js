let mostrarMenu = () => {
    monto = Number(prompt(`Calculadora de IVA
                            Ingrese monto a calcular`))
    while (isNaN(monto)) {
        alert("Alguno de los valores ingresados no es un número")
        mostrarMenu()
    }
    if (Number.isInteger(monto)) {
        calcularIva()
    }
}

let calcularIva = () => {
    let tasa = 21
    let iva = (monto * tasa) / 100
    alert(`El valor del IVA es: ` + iva +
`
 El valor total es: `+ (monto + iva))
}

mostrarMenu()