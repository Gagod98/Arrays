// Crear un array vacío, luego generar 10 números al azar y 
//guardarlos en un array. Mostrar en consola el resultado del array.
const numsRng = [];

for (let index = 0; index <= 9; index++) {
    function numRng2(max) {
        return Math.floor(Math.random() * max);
      }
    numsRng.push (numRng2(100));
};

console.log (numsRng);

//  El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: 
//'1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
caracSep = String(prompt("Ingresa palabras separadas por una coma"));

let palabSep = caracSep.split(",");

console.log (palabSep);


//De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
//El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript 
//que regresan el mayor y menor elemento de un arreglo.


numsArray = [10,40,30,20,15,5];
let numeroMayor = Math.max(...numsArray);
let numeroMenor = Math.min(...numsArray);
function ordenarNums(a , b) {
    return a - b;
}
numsArray.sort (ordenarNums)
console.log (numsArray);
console.log("El número mayor es: " + numeroMayor);
console.log("El número menor es: " + numeroMenor);