var arrayPersona = []
var nacionalidad = [arrayPersona.length]

for (let index = 0; index < 10; index++) {
    arrayPersona.push(crearPersonas());
}


console.log(arrayNacionalidad)
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
    return {
        nombre: nombre,
        cedula: cedula,
        nacionalidad: nacionalidad,
        edad: edad,
        pais: pais,
        ciudad: ciudad
    }
}

console.log(arrayPersona);

const arrayNacionalidad = crearPersonas.map(function(numeroNacionalidad) {
    return numeroNacionalidad.nacionalidad;

})
console.log(arrayNacionalidad);










for (let i = < arrayPersona; i++) {
    const element = arr];

}

}
for (let index = 0; index < arrayPersona.length; index++) {
    crearPersonas = arrayPersona[index.nacionalidad];

}

for (const x of arrayPersona) {
    console.log(x.nacionalidad)
}




let nacionalidades = crearPersonas.find(x => x === "nacionalidad");
console.log(nacionalidades);



/*    
function nacioArg = crearPersonas.map(crearPersonas => nacionalidad);
console.log(nacionalidad)