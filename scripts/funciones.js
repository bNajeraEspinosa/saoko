console.log("sesión función JS02");

//*************FUNCIÓN DECLARADA************+*/

/*Hoisting es un término para describir que las declaraciones de variables y 
funciones son movidas a la parte superior del scope más cercano: scope global o de función. 

Esto sucede solamente con las declaraciones y no con las asignaciones. 
*/

/**
 * Ejemplo función declarada
 * (función declarada o function statement)
 * Realiza la multiplicación de dos números
 * @param {number} a mutiplicando 1 
 * @param {number} b mutiplicador 2 
 * @returns resultado a*b 
*/

function multiplica (a,b){return (a*b);}

console.log("multiplica 5*6 = " + multiplica(5,6));

//*************FUNCIÓN EXPRESADA************+*/
/**
 * Las funciones expresadas (function expresions)
 * son declaradas dentro de la asignación de una variable
 * 
 * las funciones pueden ser anónimas(sin nombre).
 * las funciones expresadas no tienen hosting.
 * 
*/

/**
 * Ejemplo función declarada
 * (función declarada o function statement)
 * Realiza la multiplicación de dos números
 * @param {number} a mutiplicando 1 
 * @param {number} b mutiplicador 2 
 * @returns resultado a*b 
*/

const suma = function (a,b){return (a+b);}

console.log("suma 56+4 = " + suma(56,4));

//*************FUNCIÓN AUTOINVOCADAS************+*/
/**
 * Las funciones autoinvocadas (self-invoking functions)
 * son declaradas dentro de la asignación de una variable
 * 
 * Pueden ser anónimas y se auto ejecutan() en su declaración (function)()
*/

(function(){
console.log("================");
console.log("Ola ke ace");
console.log("================");

})();

//++++++++++ Función flecha +++++++/
/**
 * Las funciones flecha funciones similar a las
 * funciones declaradas, pero no requieren la
 * palabra "function" y si tienen una solo instrucción
 * y es el retorno, no requiere la instrucción "return"
*/

/** 
* @param {number} a número 1 
* @param {number} b número 2 
* @returns resultado a-b 
*/
const resta = (a,b) => a-b;
console.log("resta 10 - 5 = " + resta(10,5));

//++++++++++ Función parámetros inicializados +++++++/
/**
 * Las funciones flecha funciones similar a las
 * funciones declaradas, pero no requieren la
 * palabra "function" y si tienen una solo instrucción
 * y es el retorno, no requiere la instrucción "return"
*/

/** 
* @param {number} a número 1 
* @param {number} b número 2 
* @returns resultado a/b 
*/

function división(a,b=1){
    return a/b
}

console.log("división = " + división(4));

//++++++++++ Función recursiva +++++++/

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}

console.log("numero factorial de 5 es " + factorial(5));