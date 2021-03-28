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
console.log("La cantidad de vehiculos toyota y rojo es: " + cantToyota);


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



let cantToyotaRojo = 0
for (let index = 0; index < arrayAutos.length; index++) {
    if (arrayAutos[index].marca == "Toyota" && arrayAutos[index].color == "rojo") {
        cantToyotaRojo = cantToyotaRojo + 1;

    }
}
console.log("La cantidad de vehiculos Toyota y rojo es igual a : " + cantToyotaRojo)