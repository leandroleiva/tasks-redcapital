/*
  Task 1:
  Dado un número, mostrar su serie de Fibonacci. (La serie de Fibonacci es un
  orden de números dónde cada número es la suma de los dos anteriores).
*/
const serieFibonacci = () => {
  const number = parseInt(prompt('Ingrese numero para calcular Fibonacci'));
  let n1 = 1, n2 = 1, aux;
  console.log('Serie Fibonacci de',number);

  for (let i = 1; i <= number; i++) {
      console.log(n1);
      aux = n1 + n2;
      n1 = n2;
      n2 = aux;
  }
}

//serieFibonacci();


  
/*
  Task 2:
  Dada una cadena de texto, darle la vuelta a invertir el orden de sus caracteres,
  sin usar métodos propios del lenguaje, sólo estructuras de control. }
*/
  
const invierteTexto = () => {
  const string = prompt('Ingrese cadena de texto');
  let invert = '';
  for (let i = string.length-1; i >= 0 ; i--) {
    invert += string[i];
  }
  console.log('El texto invertido es:');
  console.log(invert);
}

//invierteTexto();
  
/*
  Task 3:
  Escriba una función que permita multiplicar dos números sin utilizar el signo
  de multiplicación.
*/

  const multiplicar = () => {
    const number1 = parseInt(prompt('Ingrese primer numero a multiplicar'));
    const number2 = parseInt(prompt('Ingrese segundo numero a multiplicar'));
    let producto = 0;
    for (let i = 0; i < number2; i++) {
      producto += number1;
    }
    console.log(number1,' x ',number2,'=',producto);
  }

  //multiplicar();

/*
  Task 4:
  Escriba una función que sume los números del siguiente array, siempre y
  cuando los números contenidos sean primos.
*/
const esPrimo = (number) => {
  if (number<=1) 
    return false;
  for (var i = 2; i <= Math.sqrt(number); i++)
      if (number % i == 0) return false;
  return true;
}

const sumaPrimos = () => {

  let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
  let suma = 0;
  for (var i = 0; i < array.length; i++) {
    if (esPrimo(array[i])) {
      suma += array[i];
    }
  }
  console.log(array);
  console.log('la suma de numeros primos del array es: ',suma);
}

sumaPrimos()