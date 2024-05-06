// 1.- Crea una variable que tenga como valor un array vacío.

const userName = [];

// 2.- Crea una variable que tenga como valor un array con al menos 3 tipos de datos distintos.

let catProperties = [Fígaro, 12, true];

// 3.- 
//          3.1.- Crea un array vacío y añádele dos valores usando push(), dos valores usando unshift() y luego usa pop() y shift() una vez. A continuación, muestra por consola la longitud del array.

let videoGameConsoles = [];
videoGameConsoles.push('Nintendo DS', 'PlayStation 5');
videoGameConsoles.unshift('Game Cube', 'X-BOX 360');
videoGameConsoles.pop();
videoGameConsoles.shift()
console.log(videoGameConsoles);
console.log(videoGameConsoles.length);


//          3.2.- Crea un array classNames con todos los nombres de tus compañer@s de clase. Muestra por consola tu nombre seleccionando el que hay en el array classNames.

let classNames = ['Adriana', 
'Andrea',
'Jesús Alemán',
'Jesús Raad',
'Javmir',
'Roger',
]

classNames.push('Gabriela')

console.log(classNames[6]);

// 4.- Crea el siguiente array: const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"]. A continuación, muestra por consola los nombres ["María, Isidro"] usando slice(). Luego, sustituye "Elizondo" por "Parma" usando splice() y muestra el resultados por consola.

const names = ["Carlos", 
"María",
"Isidro",
"Elizondo", 
"Molina"]

console.log(names.slice(1, 3));
names.splice(3, 1, 'Parma');
console.log(names);

// 5.- Convierte el array anterior (names) en un string de nombres separados por espacios.

const names = ["Carlos", 
"María",
"Isidro",
"Elizondo", 
"Molina"]

names.join(' ')


// 6.- Crea la variable const sentence = "El perro de San Roque no tiene rabo". A continuación, conviértela en un array de palabras, y, luego, en otro de letras.

const sentence = "El perro de San Roque no tiene rabo.";

sentence.split(' ');

sentence.split('');


// 7.- Diseña un programa (función) que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico. ( permite detectar valores no numéricos).

const arrayMaxSize = 6; // Representa el máximo de números con el que puedo llenar mi array.
let numbersArray = [];

function addNumbers() {
    let input;
    let countPares = 0;
    let countImpares = 0;

    for (let i = 0; i < arrayMaxSize; i++) {
        input = prompt("Ingresa un número:");
        
        if (!isNaN(input) && input !== null && input !== '') {
            let number = parseInt(input);
            numbersArray.push(number);

            if (number === 0) {
                break;
            }

            if (number % 2 === 0) {
                countPares++;
            } else {
                countImpares++;
            }
        } else {
            alert("Entrada inválida.");
            break; 
        }
    }

    if (numbersArray.length === arrayMaxSize) {
        alert("Se alcanzó el límite máximo de números.");
    }

    alert("¡Gracias por completar el ejercicio! " + numbersArray.join(', '));
    alert("Cantidad de números pares: " + countPares);
    alert("Cantidad de números impares: " + countImpares);
}

addNumbers();



// 8.- Un servicio de atención al cliente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio una persona: Lunes - María; Martes - Luis; Miércoles - Antonia; Jueves - Pedro; Viernes - Marisa; Sábado y Domingo - Sin Servicio. Usa un array para almacenar los datos del servicio. En este array cada elemento será un par [día - nombre]. Crea una función que responda con el nombre de la persona encargada del servicio sabiendo el día. Si le pido servicio('Lunes') me debería decir "Este día se encarga María" y si le pido servicio(Miércoles") me daría Antonia.

function servicio() {
  
    let turnos = [
        ["Lunes", "María"],
        ["Martes", "Luis"],
        ["Miércoles", "Antonia"],
        ["Jueves", "Pedro"],
        ["Viernes", "Marisa"],
        ["Sábado", "Sin servicio"],
        ["Domingo", "Sin servicio"]
    ];

    let dia = prompt("Ingrese el día de la semana:");


    for (let i = 0; i < turnos.length; i++) {
        if (turnos[i][0].toLowerCase() === dia) {

            alert(`Este día se encarga ${turnos[i][1]}`);
            return; 
        }
    }

    alert("Este día no hay servicio");
}


servicio();


// 9.- Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array donde cada elemento es un par [producto - precio]. Diseña una función que reciba como argumento el nombre de un producto (minúscula o mayúscula) y devuelva su precio. Si la lista de precios es monitor: 200€, teclado: 20€ ratón: 10€, al pedir precio('monitor') me devolverá 200.

function askPrecio() {

    // function quitarTildes(texto) {
    //     return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // }

    const precios = [
        ["monitor", 200],
        ["teclado", 20],
        ["ratón", 10]
    ];

    let producto = prompt("Ingresa el nombre del producto cuyo precio deseas conocer:");

    for (let i = 0; i < precios.length; i++) {
        if (precios[i][0] === producto) {
          
            alert(`El precio del ${producto} es ${precios[i][1]}€`);
            return;
        }
    }

    alert("Producto no encontrado");
}

askPrecio();

