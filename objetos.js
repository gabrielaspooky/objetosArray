// 1.- Crea un objeto llamado citizen1 y dale las propiedades name, lastname y age. Elige tú los valores.

let = citizen1 = {
citizenName: 'Taylor',
citizenLastName: 'Swift',
citizenAge: 33
}

// 2.- Una vez creado, añádele la propiedad city, con el valor que tú quieras, y cambia el valor de la propiedad age. Comprueba que los cambios han surtido efecto.

let = citizen1 = {
    citizenName: 'Taylor',
    citizenLastName: 'Swift',
    citizenAge: 34,
    city: 'West Reading'
    }

// 3.- Crea una función checkCitizenship que acepte como parámetro un objeto, compruebe la edad del ciudadano y, si ésta es mayor de 18, añada la propiedad canVote: true; de lo contrario, debe añadir canVote: false. Usala con el objeto citizen1.

function checkCitizenship(citizen1) {
    let = citizen1 = {
        citizenName: 'Taylor',
        citizenLastName: 'Swift',
        citizenAge: 34,
        city: 'West Reading'
        }
if (citizen1.citizenAge >= 18) {
    citizen1.canVote = true;
}
 else {
    citizen1.canVote = false;
 }
 return;
}

checkCitizenship();

console.log(citizen1);

// 4.- Crea una función llamada createCitizen que acepte 3 strings: nombre, apellido y edad. Si los parámetros son válidos, debe retornar un nuevo objeto y almacenarlos en un array.

let citizens = []; 

function createCitizen() {
   
    let name = prompt("Introduce tu nombre:");
    let lastName = prompt("Introduce tu apellido:");
    let age = prompt("Introduce tu edad:");

    if (typeof name === 'string' && typeof lastName === 'string' && !isNaN(age)) {
        let newCitizen = {
            name: name,
            lastName: lastName,
            age: age
        };
        citizens.push(newCitizen); 

        alert(`La ciudadanía de ${name} ${lastName}, con edad de ${age} años, ¡se ha creado exitosamente!`);
    } else {
        
        return alert("Datos inválidos");
    }
}

createCitizen();
