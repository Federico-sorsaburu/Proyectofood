let pedidos = parseInt(prompt("Dependiendo tu presupuesto llevate lo que desees "))

if (pedidos >= 70) {
    console.log("Pizza de pepperoni");
} else if (pedidos >= 65) {
    console.log("Pasta al pesto");
} else if (pedidos >= 50) {
    console.log("Hamburguesa clásica");
} else if (pedidos >= 45) {
    console.log("Ensalada César");
} else {
    console.log("No cuentas con saldo disponible para comprar :(");
}


let password;
let intentos = 0;
const maxIntentosPermitidos = 2;

do {
    password = prompt('Ingresa la contraseña');
    intentos++;

    if (password === 'clave123') {
        alert("Contraseña correcta");
        break; // Sale del bucle si la contraseña es correcta
    } else if (intentos < maxIntentosPermitidos) {
        alert(`Contraseña incorrecta. Te quedan ${maxIntentosPermitidos - intentos} intentos.`);
    }
} while (intentos < maxIntentosPermitidos);

if (intentos === maxIntentosPermitidos && password !== 'clave123') {
    alert("Has alcanzado el número máximo de intentos.");
}