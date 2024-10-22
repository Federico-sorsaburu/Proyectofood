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



// total del carrito compras

const carrito__TOTAL = [1000, 400, 1200, 600, 900]
// console.log(carrito__TOTAL)


const TOTAL_A_PAGAR = carrito__TOTAL.reduce((acum, num) => acum + num,0)
console.log("El total a pagar de tu compra " + TOTAL_A_PAGAR)


const listaCOMIDA = ["queso lasal", "Cangrejo Jumbo","Jugo kotail","Filete capo","Ensalada de frutas", "Pizza de queso", "carne kofta","Pastelitos españoles", "tostadas de queso","SHAWARMA DE POLLO"]
listaCOMIDA.sort((a,b) => b.localeCompare(a));
console.log(listaCOMIDA)



let productosComercio = [
    {
        nombre: "QUESO LASAL",
        precio: 18.29
    },
    {
        nombre: "CANGREJO JUMBO",
        precio: 24.59
    },
    {
        nombre: "JUGO KOKTAIL",
        precio: 12.99
    },
    {
        nombre: "FILETE CAPO",
        precio: 60.55
    },
    {
        nombre: "ENSALADA DE FRUTAS ORGÁNICA",
        precio: 8.55
    },
    {
        nombre: "PIZZA DE QUESO",
        precio: 18.25
    },
    {
        nombre: "PIZZA MEGA DE QUESO",
        precio: 21.77
    },
    {
        nombre: "PASTELITOS ESPAÑOLES",
        precio: 14.99
    },
    {
        nombre: "CARNE KOFTA",
        precio: 41.55
    },
]
let preciosComercio = productosComercio.map (precios => Math.floor(precios.precio) );
console.log("Precios actualizados 2024: " + preciosComercio)

let sumaTotal = productosComercio.reduce((acum,precios) => acum + Math.floor(precios.precio), 0 )
console.log ("total acumulado: " + sumaTotal)