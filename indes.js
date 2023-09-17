const operaciones = require("./productos")

let array = process.argv.slice(2)

function parsearTerminos(texto) {
    return {
        primerTermino: 120,
        segundoTermino: 890,
        operacion: "+"
    }
}


function ejecutarOperacion(oper) {
    const mapa = {
        "+": operaciones.sumar,
        "-": operaciones.resta,
        "*": operaciones.multiplicar,
        "/": operaciones.dividir
    }
    const simbolo = oper.operacion
    const ejecutor = mapa[simbolo]
    return ejecutor(
        oper.primerTermino,
        oper.segundoTermino
    )
}

function main() {
    const operacionParseada = parsearTerminos(process.argv[2])
    const resultado = ejecutarOperacion(operacionParseada)
    console.log(resultado)
}
main()
console.log("holis")