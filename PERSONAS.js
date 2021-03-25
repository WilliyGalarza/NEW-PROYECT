var arrayPersona = []

for (let index = 0; index < 5; index++) {
    arrayPersona.push(crearPersonas());
}

function crearPersonas(nombre, cedula, nacionalidad, edad, pais, ciudad) {
    return {
        nombre: nombre,
        cedula: cedula,
        nacionalidad: nacionalidad,
        edad: edad,
        pais: pais,
        ciudad: ciudad
    }
}
arrayPersona[0] = crearPersonas("Juan", 19283192321, "Argentina", 28, "Argentina", "Buenos Aires")
arrayPersona[1] = crearPersonas("Mario", 1928434434, "Ecuatorino", 20, "Ecuador", "Quito")
arrayPersona[2] = crearPersonas("Carlos", 1122455922, "Colombiano", 30, "Colombia", "Cali")
arrayPersona[3] = crearPersonas("Enrique", 32283192355, "Argentina", 44, "Argentina", "Rosario")
arrayPersona[4] = crearPersonas("Camila", 22283192118, "Argentina", 21, "Argentina", "La Plata")

console.log(arrayPersona);