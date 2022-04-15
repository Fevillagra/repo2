const lista = []
let cantidad = parseInt(prompt('Ingrese la cantidad de alumnos:'))

do{
    let entrada = prompt('Ingrese nombre del alumno')
    lista.push(entrada.toUpperCase())
    console.log(lista.length)
} while(lista.length != cantidad)

alert('La lista de alumnos es: \n' + lista.join('\n') )