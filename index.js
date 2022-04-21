//Trivia

let puntos = 0
let errores = 0
const respuestas = []

function trivias(){
    alert('Ingrese un número, A, B, C o D, verdadero o falso según corresponda' )

    //RESPUESTA CORRECTA: 1980
    const question1 = prompt('SIN OPCIONES: \n  ¿En que año se creo HTML?')
    if(question1 == 1980) {
        alert('Respuesta correcta')
        puntos++       
    } else {
        errores++
        alert('Respuesta incorrecta')
    }
    respuestas.push(question1)

    //RESPUESTA CORRECTA: 3
    const question2 = prompt('SIN OPCIONES: \n ¿Cuantas versiones de CSS existen?')
    if(question2 == 3) {
        puntos++
        alert('Respuesta correcta')
    } else {
        errores++
        alert('Respeusta incorrecta')
    }
    respuestas.push(question2)

    // RESPUESTA CORRECTA : B Brendan Eich
    const question3 = prompt('CON OPCIONES: \n ¿Quien creo JavaScript? \n A: Richard Brodie \n B: Brendan Eich \n C:Dennis Ritchie \n D: Guido van Rossum').toUpperCase()
    if(question3 == 'B') {
        puntos++
        alert('Respuesta correcta')
    } else {
        errores++
        alert('Respeusta incorrecta')
    }
    respuestas.push(question3)

    // RESPUESTA CORRECTA: VERDADERO
    const question4 = prompt('VERDADERO O FALSO: \n Go es un lenguaje de programación desarrollado por Google').toUpperCase()
    if(question4 == 'VERDADERO') {
        puntos++
        alert('Respuesta correcta')
    } else {
        errores++
        alert('Respeusta incorrecta')
    }
    respuestas.push(question4)

    // RESPUESTA CORRECTA: 1991
    const question5 = prompt('SIN OPCIONES: \n ¿En que año apareció/fue lanzado python?')
    if(question5 == '1991') {
        puntos++
        alert('Respuesta correcta')
    } else {
        errores++
        alert('Respeusta incorrecta')
    }
    respuestas.push(question5)

    // RESPUESTA CORRECTA: 5
    const question6 =  prompt('SIN OPCIONES : \n ¿Cuantás versiones de html existen?')
    if(question6 == '5') {
        puntos++
        alert('Respuesta correcta')
    } else {
        errores++
        alert('Respuesta incorrecta')
    }
    respuestas.push(question6)

    // RESPUESTA CORRECTA: D
    const question7 = prompt('CON OPCIONES: \n ¿Cuál fue la primer computadora? \n A: ENIAC \n B: UNIVAC \n C: IBM \n D: Z1').toUpperCase()
    if(question7 == 'D') {
        puntos++
        alert('Respuesta correcta')
    } else {
        errores++
        alert('Respeusta incorrecta')
    }
    respuestas.push(question7)

    // RESPUESTA CORRECTA: VERDADERO
    const question8 = prompt('VERDADERO O FALSO: \n El nombre del lenguaje Python recibe su nombre de Monty Python, grupo de humoristas').toUpperCase()
    if(question8 == 'VERDADERO') {
        puntos++
        alert('Respuesta correcta')
    } else {
        errores++
        alert('Respeusta incorrecta')
    }
    respuestas.push(question8)

    // RESPUESTA CORRECTA: FALSO
    const question9 = prompt('VERDADERO O FALSO: \n El primer lenguaje de programacion del mundo fue fortan').toUpperCase()
    if(question9 == 'FALSO') {
        puntos++
        alert('Respuesta correcta')
    } else {
        errores++
        alert('Respuesta incorrecta')
    }
    respuestas.push(question9)
    
    // RESPUESTA CORRECTA: 1995
    const question10 = prompt('SIN OPCIONES: \n  ¿En que salió la primer version de JavaScript?')
    if(question10 == 1995) {
        alert('Respuesta correcta')
        puntos++       
    } else {
        errores++
        alert('Respuesta incorrecta')
    }
    respuestas.push(question10)
    
}
trivias()

class concursante {
    constructor(a,b,c,d,e) {
        this.name = a
        this.age = b
        this.puntos = c
        this.errores = d
    }
    calif() {alert('Puntaje total: ' + puntos + ' \n ' + 'Errores: ' + errores )}
}

alert('Ingrese sus datos para guardar puntaje')
const person01 = new concursante (
    prompt('Ingrese su nombre'), 
    prompt('Ingrese su edad'),
    puntos,
    errores,
)
console.log(person01)
person01.calif()
console.log('Respuestas:')
console.log(respuestas)