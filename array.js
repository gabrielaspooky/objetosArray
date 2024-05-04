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

// 5.- Convierte el array anterior (names) en un string de nombres separados por espacios.

// 6.- Crea la variable const sentence = "El perro de San Roque no tiene rabo". A continuación, conviértela en un array de palabras, y, luego, en otro de letras.

// 7.- Diseña un programa (función) que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico. ( permite detectar valores no numéricos).

// 8.- Un servicio de atención al cliente tiene establecido turnos semanales para sus empleados de manera que cada día de la semana se encarga del servicio una persona: Lunes - María; Martes - Luis; Miércoles - Antonia; Jueves - Pedro; Viernes - Marisa; Sábado y Domingo - Sin Servicio. Usa un array para almacenar los datos del servicio. En este array cada elemento será un par [día - nombre]. Crea una función que responda con el nombre de la persona encargada del servicio sabiendo el día. Si le pido servicio('Lunes') me debería decir "Este día se encarga María" y si le pido servicio(Miércoles") me daría Antonia.

// 9.- Una tienda vende monitores, teclados y ratones. Los precios se almacenan en una estructura array donde cada elemento es un par [producto - precio]. Diseña una función que reciba como argumento el nombre de un producto (minúscula o mayúscula) y devuelva su precio. Si la lista de precios es monitor: 200€, teclado: 20€ ratón: 10€, al pedir precio('monitor') me devolverá 200.