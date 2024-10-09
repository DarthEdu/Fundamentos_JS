// Tematica Almacenes Japon - SmartPhones

let celularMotorola_G24 = "214.35";
let celularRealme_C67 = 270.3;

//CASTING
console.log(+celularMotorola_G24 + celularRealme_C67);

let smartwatch = "Cubitt CTTN-1";
console.log(smartwatch.length);
console.log(smartwatch.trim());
console.log(smartwatch.includes("3"));
console.log(smartwatch.toLocaleLowerCase());
console.log(smartwatch.toLocaleUpperCase());

let romIphone_16 = 128;
let romXiaomi_RN13pro = 256;

// ES6 - operador ternario
romIphone_16 <= romXiaomi_RN13pro
  ? console.log("Gana Xiaomi")
  : console.log("Gana Iphone");

// FUNCIONES DECLARADAS

function getCelularZTE() {
  console.log("photo/celular/ZTE.png");
}

getCelularZTE();

// FUNCIONES EXPRESADAS

const conexionBluetooth = function () {
  console.log("Bluetooth esta activado");
};
conexionBluetooth();

const descuentoPrecio = function (precio, descuento) {
  precio -= precio * (descuento / 100); // Corregir cálculo del descuento
  console.log(
    `El descuento es de ${descuento}% y el total a pagar es ${precio}`
  ); // Usar backticks para interpolar
};

descuentoPrecio(250, 10);

// Objetos
const datosKindle = {
  name: "Amazon Kindle 6lnch",
  modelo: "Kindle 6lnch",
  marca: "Amazon",
  garantia: 12,
  status: true,
};
