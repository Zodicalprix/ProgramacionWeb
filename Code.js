function NombreEdad(){
const nombre = prompt("Ingrese su nombre:");
const edad = prompt("Ingrese su edad:");
const mensaje = `Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${parseInt(edad) + 1} años.`;
alert(mensaje);
}


function triangulo(){
const base = prompt("Ingrese la base del triángulo:");
const altura = prompt("Ingrese la altura del triángulo:");
const area = (base * altura) / 2;
alert(`El área del triángulo es: ${area}`);
}


function rectangulo(){
const base = prompt("Ingrese la base del rectángulo:");
const altura = prompt("Ingrese la altura del rectángulo:");
const area = base * altura;
alert(`El área del rectángulo es: ${area}`);    
}


function circulo(){
const radio = prompt("Ingrese el radio del círculo:");
const area = Math.PI * Math.pow(radio, 2);
alert(`El área del círculo es: ${area}`)    
}


function ParImpar(){
const numero = prompt("Ingrese un número:");
alert("Números pares e impares hasta", numero);
for (let i = 1; i <= numero; i++) {
  if (i % 2 === 0) {
    alert(i + " - es par");
  } else {
    alert(i + " - es impar");
  }
}
}

function Primo(){
const numero = prompt("Ingrese un número entero mayor que 1:");

if (numero > 1) {
    let esPrimo = true;
    
    for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        esPrimo = false;
        break;
    }
    }

    if (esPrimo) {
    alert(numero + " es un número primo.");
    } else {
    alert(numero + " no es un número primo.");
    }
    } else {
    alert("El número debe ser mayor que 1.");
    }
}

function Factorial(){
const numero = prompt("Ingrese un número entero mayor que cero:");
    let factorial = 1;
    
    if (numero >= 0) {
      for (let i = 2; i <= numero; i++) {
        factorial *= i;
      }
     
      alert(`El factorial de` + ` ` + numero  +  ` ` +`es:`+  ` ` + factorial);
    } else {
      alert("El número debe ser mayor o igual que cero.");
    }
    
}

function suma50(){
    let suma = 0;
    let contador = 0;
    
    while (suma <= 50) {
      const numero = parseFloat(prompt("Ingrese un número:"));
      suma += numero;
      contador++;
    }
    
alert("Total acumulado:" + suma);
alert("Cantidad de números introducidos:" + contador);
}

function Arra(){
const numeros = [2, 5, 8, 11, 14];
const pares = [];
const impares = [];
    
    for (let i = 0; i < numeros.length; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
      const resultado = numeros[i] * numeroAleatorio;
      alert(`${numeros[i]} x ${numeroAleatorio} = ${resultado}`);
    
      if (resultado % 2 === 0) {
        pares.push(resultado);
      } else {
        impares.push(resultado);
      }
    }
    
alert("Números pares:" + pares);
alert("Números impares:" + impares);
}

function DNI(){
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    const dni = prompt("Ingrese el número de DNI:");
    const dniNumero = parseInt(dni);
    
    if (dniNumero >= 0 && dniNumero <= 99999999) {
      const indiceLetra = dniNumero % 23;
      const letra = letras[indiceLetra];
      alert(`La letra correspondiente al DNI ${dni} es: ${letra}`);
    } else {
      alert("El número de DNI es inválido.");
    }     
}

function ContLetras(){
    const palabra = prompt("Ingrese una palabra:");
    const longitud = palabra.length;
    const vocales = palabra.match(/[aeiou]/gi);
    const consonantes = palabra.match(/[bcdfghjklmnpqrstvwxyz]/gi);
    
alert("Número de consonantes:", consonantes ? consonantes.length :0);
alert("Número de vocales:", vocales ? vocales.length : 0);
alert("Longitud de la palabra:", longitud);
}

function ComprobanteColor(){
    const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];
    const colorUsuario = prompt("Ingrese un color:");
    
    if (colores.includes(colorUsuario)) {
      alert(`El color ${colorUsuario} se encuentra en el array.`);
    } else {
      alert(`El color ${colorUsuario} no se encuentra en el array.`);
    }
}
