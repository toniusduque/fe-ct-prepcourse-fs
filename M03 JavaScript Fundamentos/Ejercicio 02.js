/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:;
   var a = String(string);
   return(a);
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var a = x + y;
   return(a);
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var a = x - y;
   return(a);
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var a = x / y;
   return(a);
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var a = x * y;
   return(a);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var a = x % y;
   return(a);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
