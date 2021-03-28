var arrayPersona = []

arrayPersona[0] = crearPersonas("Juan", 19283192321, "Ecuatoriano", 28, "Ecuador", "Cuenca")
arrayPersona[1] = crearPersonas("Mario", 1928434434, "Ecuatoriano", 20, "Ecuador", "Quito")
arrayPersona[2] = crearPersonas("Camila", 32232292355, "Ecuatoriano", 55, "Ecuador", "Guayaquil")
arrayPersona[3] = crearPersonas("Marcos", 22283192428, "Ecuatoriano", 77, "Ecuador", "Loja")
arrayPersona[4] = crearPersonas("Edison", 1928434434, "Ecuatoriano", 20, "Ecuador", "Quito")
arrayPersona[5] = crearPersonas("Carlos", 1122455922, "Colombiano", 30, "Colombia", "Cali")
arrayPersona[6] = crearPersonas("Vanesa", 1123255922, "Colombiano", 30, "Colombia", "Cali")
arrayPersona[7] = crearPersonas("Enrique", 3228319266, "Argentino", 44, "Argentina", "Rosario")
arrayPersona[8] = crearPersonas("Camilo", 22283192118, "Argentino", 21, "Argentina", "La Plata")
arrayPersona[9] = crearPersonas("Jorge", 19283192321, "Argentino", 28, "Argentina", "Buenos Aires")

function crearPersonas(nombre, cedula, nacionalidad, edad, pais, ciudad) {
    const persona = {
        nombre: nombre,
        cedula: cedula,
        nacionalidad: nacionalidad,
        edad: edad,
        pais: pais,
        ciudad: ciudad
    }
    return persona
}



let cantEcuatorianos = 0;
let cantArgentinos = 0;
/*for (let index = 0; index < arrayPersona.length; index++) {
    if (arrayPersona[index].nacionalidad == "Argentino") {
        cantArgentinos= cantArgentinos+1;
        
    }

    if (arrayPersona[index].nacionalidad == "Ecuatoriano") {
        cantEcuatorianos= cantEcuatorianos+1;
        
    }
}
    console.log("La Cantidad de Argentinos es: " +cantArgentinos)
    console.log("La Cantidad de Ecuatorianos es: " +cantEcuatorianos) */

for (const x of arrayPersona) {
    console.log(x.nacionalidad)
    if (x.nacionalidad == "Ecuatoriano") {
        cantEcuatorianos = cantEcuatorianos + 1;
    }
}
console.log("La Cantidad de Ecuatorianos es: " + cantEcuatorianos)


declarar un array
insertar 20 objetos dentro del array
tener una funcion constructora de obejetos
los objetos deben ser autos
propiedades min 10 pero almenos debe ser marca y color
cuantos vehiculos toyota existen dentro de array === === === = listo
cuantos vehiculos mazda hay dentro del array === === listo
cuantos vehiculos toyota y de color rojo hay-- -- - listo

minimo 10 vehiculos toyota y almenos 6 deben ser color rojo

si un auto es toyota y de color rojo es verdadero ?

    and y or operadores logicos