// JS -Lado del cliente
// NODE +V8 - JS Lado del servidor

// Variables
// Contenedor de información

// Tipos simpres
let data = 12           // entero
let data1 = 23.6        // float
let data2= 'hola'       // string
let data3 = '@'         // char
let data4 = false       // boolean
let data5 = undefined   // undefined

// Tipos compuestas
let data6 = ['hola',54,false]       // Array

let user = {                        // Objeto
    name: "Byron",
    activo: true
}

// No usa var - hosting
// let y cost

// ------------------------------------

// Strings - cadena de caracteres
let password = "f12FSFDAS3dsfsd45"

// propiedades y métodos
console.log(password.length);

// Método 
console.log(password.trim())
console.log(password.includes());
console.log(password.toLocaleLowerCase())
console.log(password.toLocaleUpperCase())

// ES6 - Nuevas Características
// Template Strings
console.log(`El password es: ${password}`);

// ---------------------------------------------

// Numbres

let gamPrice1 = "500.35"
let gamPrice2 = 500.35

// Casting - ES6
console.log(+gamPrice1 + gamPrice2);

// Orden de ejecucipon de los operadores (* / + - ** ())

// --------------------------------------------------------

let userCardBalance = 500
let cardBalance = 1000

// ES6 Operador Ternario

let result = cardBalance <= userCardBalance ? "Pay" : "Consuming"

// Valores verdaderos - truthy


// Valores falsos - falsy

let email

!email ? console.log("Provie an email") : console.log("Registre")


// Comparación estrícta ===
let userID = 123
userID === "123" ? console.log("User found") : console.log("User dosen't exit")

// Loops

const goals = ["Learn JS", "Play Soccer", "Watching NetFlix", "Enjoy the holyday"]
goals.forEach((goal)=>{console.log(goal)})

goals.map((goal)=>{console.log(goal)})

const newGoals = goals.map((goal)=>goal.toUpperCase())

// Summary
console.log(goals);
console.log(newGoals);

// ---------------------------

// Funciones
// Funcion anonima y autoejecutada
(function(){
    console.log('Ejecución de una función')
})()

// FUNCIÓN DECLARADA
function getAvatar(){
    console.log('/photo/user.png')
}

// FUNCIÓN EXPRESADA
const connectionBDD = function(){
    console.log('Conexión Exitosa')
}

getAvatar()
connectionBDD()

// Argumentos
const validarEmailAndToken = function(email, token){
    console.log(`El token es ${token} y su email es ${email}`)
}

validarEmailAndToken("juan@gmail.com", "123")

// Argumentos opcionales
const validarEmailAndTokenTwo = function(email, token=555){
    console.log(`El token es ${token} y su email es ${email}`)
}

validarEmailAndTokenTwo("juan@gmail.com")

// RETORNO
function tiposRetorno(){
    // Lógica
    // return "Usuariso premium"
    // return 89
    // return 88.4
    // retrn true
    // return ["user1", "use2"]
    //return {
    //    name: "Richard",
    //    age: "20"
    //}
}

console.log(tiposRetorno())

// ES6
// ARROW FUNTION
const connectionBDDMongoDB = () => {
    console.log('Conexión Exitosa')
}

connectionBDDMongoDB()

// const registerUser = (email) => {
//     console.log("User registred")
// }

const registerUser = email => console.log("User registred")

registerUser("pancho@gmail.com")

// Objetos
// Un archvio es JSON siempre y cunado la clave este en llaves
const datosBannaneritoGOD = {
    name: "Bananerito",
    age: 1,
    addres:{
        city: "Machala",
        telephone: 123
    },
    friends: ["Ccodrigo", "Toreto"],
    status: true
}

console.log(datosBannaneritoGOD.name)
console.log(datosBannaneritoGOD.friends)
console.log(datosBannaneritoGOD.status)


const nameB = datosBannaneritoGOD.name
const friendsB = datosBannaneritoGOD.friends

// ES6
// DESTRUCTURACION
const {name, age, addres, friends, status:estado} = datosBannaneritoGOD

console.log(estado)

// Propiedades
datosBannaneritoGOD.photo = "bananerito.png"

console.log(datosBannaneritoGOD)

delete datosBannaneritoGOD.age
console.log(datosBannaneritoGOD)

Object.values(datosBannaneritoGOD).includes("") ? console.log("Error") : console.log("OK")

const lunch = {
    name_plate: "Pollo Broster",
    price: 5
}

const drink = {
    name: "Jugo de coco",
    sweet: false
}

const orderUser = {...lunch, ...drink}

console.log(orderUser)

// ES6
// Nombres abrevviados de propiedades
const nameVideoGame = "MarioKart"
const priceVideogame = 89

const videoGame = {
    nameVideoGame,
    priceVideogame
}

console.log(videoGame)


// Internet
// TCP - IP
// ISO - IP - Dispositvo (modem) y (router)
// WEB
// CLIENTE - SERVIDOR (ARQUITECTURA WEB)
// HTTP (Segura  no segura)
// Dominui y subdiomini
// Hosting y Dominio
// JS - MULTIPLATAFORMA
// JS - lado del cliente + V8
// ECMA Internacional == W3C
// ECMA Script

// Node + VV8 = JS lado del servidor

// Variable
// contennedor de información
// T    ipos simples y compuestos

// Strings
// Numbers
// Condicionales
// Funtions
// Objets 
// Arrays

