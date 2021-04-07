function crearAutos(marca, color, numPuertas, motor, tipoDeCaja, neumaticos, paquete, tipoDeVehiculo, tipoDeDireccion, tipoDeEnfriamiento) {
    const vehiculo = {
        marca: marca,
        color: color,
        numPuertas: numPuertas,
        motor: motor,
        tipoDeCaja: tipoDeCaja,
        neumaticos: neumaticos,
        paquete: paquete,
        tipoDeVehiculo: tipoDeVehiculo,
        tipoDeDireccion: tipoDeDireccion,
        tipoDeEnfriamiento: tipoDeEnfriamiento,
        imagenes: [interiorDeVehiculo = {
                Tipoasientos: "Cuero",
                tipoDeVolante: "Normal"
            }

        ],
        modelo: {
            nombre: "Yaris",
            anio: "2014",
        }


    }
    return vehiculo
}
var arrayAutos = []
arrayAutos[0] = crearAutos("Toyota", "Negro", 5, 1, 4, "Automatico", "Michelin", "full", "hibrido", "mecanica", "aire", )
arrayAutos[1] = crearAutos("Toyota", "azul", 3, 1, 4, "manual", "Michelin", "full", "Electrico", "hidraulica", "liquido", )
arrayAutos[2] = crearAutos("Toyota", "rojo", 3, 1, 4, "Automatico", "Goodyear", "full", "Electrico", "mecanica", "aire", )
arrayAutos[3] = crearAutos("Toyota", "rojo", 3, 1, 4, "Automatico", "Goodyear", "full", "Electrico", "hidraulica", "liquido", )
arrayAutos[4] = crearAutos("Toyota", "rojo", 3, 1, 4, "manual", "Michelin", "full", "Electrico", "hidraulica", "aire", )
arrayAutos[5] = crearAutos("Toyota", "rojo", 3, 1, 4, "Automatico", "Goodyear", "full", "Electrico", "mecanica", "liquido", )
arrayAutos[6] = crearAutos("Toyota", "rojo", 3, 1, 4, "manual", "Michelin", "full", "hibrido", "hidraulica", "aire", )
arrayAutos[7] = crearAutos("Toyota", "rojo", 3, 1, 4, "manual", "Michelin", "full", "Electrico", "mecanica", "aire", )
arrayAutos[8] = crearAutos("Toyota", "plateado", 5, 1, 4, "Automatico", "Goodyear", "full", "mecanico", "hidraulica", "liquido", )
arrayAutos[9] = crearAutos("Toyota", "plateado", 5, 1, 4, "Automatico", "Goodyear", "full", "hibrido", "mecanica", "aire", )
arrayAutos[10] = crearAutos("Toyota", "Negro", 5, 1, 4, "manual", "Michelin", "full", "Electrico", "hidraulica", "liquido", )
arrayAutos[11] = crearAutos("Mazda", "plateado", 5, 1, 4, "manual", "Goodyear", "full", "hibrido", "mecanica", "aire", )
arrayAutos[12] = crearAutos("Mazda", "plateado", 5, 1, 4, "Automatico", "Goodyear", "full", "Electrico", "hidraulica", "liquido", )
arrayAutos[13] = crearAutos("Mazda", "blanco", 3, 1, 4, "Automatico", "Dunlop", "full", "mecanico", "hidraulica", "aire", )
arrayAutos[14] = crearAutos("Mazda", "blanco", 5, 1, 4, "manual", "Dunlop", "full", "mecanico", "mecanica", "aire", )
arrayAutos[15] = crearAutos("Citroen", "Negro", 3, 1, 4, "Automatico", "Dunlop", "full", "mecanico", "hidraulica", "liquido", )
arrayAutos[16] = crearAutos("Chevrolet", "rojo", 5, 1, 4, "manual", "Dunlop", "full", "mecanico", "mecanica", "aire", )
arrayAutos[17] = crearAutos("audi", "plateado", 5, 1, 4, "Automatico", "Dunlop", "full", "mecanico", "hidraulica", "aire", )
arrayAutos[18] = crearAutos("audi", "patleado", 5, 1, 4, "Automatico", "MDunlop", "full", "mecanico", "mecanica", "liquido", )
arrayAutos[19] = crearAutos("audi", "Negro", 5, 1, 4, "manual", "Michelin", "full", "mecanico", "hidraulica", "aire", )

console.log(arrayAutos)
let cantToyota = 0

for (let index = 0; index < arrayAutos.length; index++) {
    if (arrayAutos[index].marca == "Toyota") {
        cantToyota = cantToyota + 1;

    }
}
console.log("La cantidad de vehiculos toyota: " + cantToyota);


let cantAutosMazda = 0
for (let index = 0; index < arrayAutos.length; index++) {
    if (arrayAutos[index].marca == "Mazda") {
        cantAutosMazda = cantAutosMazda + 1;

    }
}
console.log("La cantidad de vehiculos Mazda: " + cantAutosMazda)


let cantToyotaRojo = 0
for (let index = 0; index < arrayAutos.length; index++) {
    if (arrayAutos[index].marca == "Toyota" && arrayAutos[index].color == "rojo") {
        cantToyotaRojo = cantToyotaRojo + 1;

    }
}
console.log("La cantidad de vehiculos Toyota y rojo es igual a : " + cantToyotaRojo)






var array = [
    ['blanco', 'rojo'],
    ['verde', 'azul', 'cafe', 'negro'],
    ["rosa", 'morado', 'celeste'],
    Instrumentos = {
        tipoDeInstrumento: 'acustico',
        tipoDeCuerdas: 'metalicas',

    }
]
array.push({
    numCuerdas: 6,
    instrumentosSonoros: 'verdadero',

})

array[1].push('celeste', 'blanco')
arrayObjeto = []
for (let i = 0; i < array.length; i++) {
    if (Object.prototype.toString.call(array[i]) === '[object Array]') {
        arrayObjeto.push(array[i])
    }

}
console.log("Nuevo Array", arrayObjeto)


se recorre el array para saber o analizar los tipos de elementos dentro del array, sacar todos los objetos que existan en el array
y meterlo dentro de el nuevo array












resto
recorrer el array pero sin las posiciones

agregar nuevos elementos al array de la posicion 1
    (push)

volver a presentar console.log

arrays que reciban obejtos




almacenar dentro de un array todos los name con el api que me va a pasar