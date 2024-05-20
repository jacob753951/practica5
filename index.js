const prompt = require('prompt-sync')();

function obtenerNombres() {
    const nombres = [];
    let nombre;

    while (true) {
        nombre = prompt('Ingrese un nombre (o presione Enter para finalizar): ').trim();
        if (nombre === '') {
            break;
        }
        nombres.push(nombre);
    }

    return nombres;
}

function analizarNombres(nombres) {
    const cantidad = nombres.length;

    const nombresUnicos = [...new Set(nombres)];
    const repetidos = nombres.filter((item, index) => nombres.indexOf(item) !== index);

    const nombreMasLargo = nombres.reduce((a, b) => a.length >= b.length ? a : b, '');
    const nombreMasCorto = nombres.reduce((a, b) => a.length <= b.length ? a : b, nombres[0]);

    return {
        cantidad,
        repetidos: [...new Set(repetidos)],
        nombreMasLargo,
        nombreMasCorto
    };
}

const nombres = obtenerNombres();

const resultado = analizarNombres(nombres);

console.log(`Se ingresaron ${resultado.cantidad} nombres.`);
if (resultado.repetidos.length > 0) {
    console.log(`Nombres repetidos: ${resultado.repetidos.join(', ')}`);
} else {
    console.log('No hay nombres repetidos.');
}
console.log(`El nombre más largo es: ${resultado.nombreMasLargo}`);
console.log(`El nombre más corto es: ${resultado.nombreMasCorto}`);
