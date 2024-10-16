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
// Tipos simples y compuestos

// Strings
// Numbers
// Condicionales
// Funtions
// Objets 
// Arrays

const boys = ["Peter", "Juan", "Luisa", "Anahi", "Martin"]

const customers = [{
    name:"Luis",
    order:45,
    place: "Villaflora"
},
{
    name:"Jose",
    order:26,
    place:"Lagatazo"
}]
// callback duncion que se pasa como parámetro en otra función

boys.forEach((b,i)=>(console.log(`${i+1} - ${b}`))) 

customers.forEach((c,i)=>(console.log(`${i+1} - ${c.order} ${c.name}`)))

const services = [
    {
        name:"Basic",
        mount:5,
        image:"photo/servvice1.png",
        details:["Atención Familiar", "Grupo Social"]
    },
    {
        name:"Plus",
        mount:25,
        image:"photo/servvice2.png",
        details:["Atención Familiar", "Seguro Médico"]
    }
]

// map permite modificar y crear un nuevo arreglo modificado
/*const newServices = services.map((s)=>{
    return{
        name:s.name,
        image:s.image
    }
})*/

// Otra forma de hacer uso de maps
const newServices = services.map((s)=>(
    {
        name:s.name,
        image:s.image
    }
))

console.log(newServices)

const equipments = ["Tubo de Oxígeno", "Camilla", "Termómetro", "Medidor de pulso"]

// ES6
// Desestructuración a nivel de arreglos

const [equipment1, equipment2, equipment3, equipment4] = equipments

console.log(equipment1)
console.log(equipment2)
console.log(equipment3)
console.log(equipment4)

const cantegories = ["Camas", "Balanceados", "Juguetes", "Accesorios"]

cantegories.length >= 5 ? console.log("Registrar Categoría") : console.log("No se puede registrar")

cantegories.push("Medicamentos")
cantegories.unshift("Adopciones")
cantegories.pop()
cantegories.shift

console.log(cantegories)

let resultCategorie = cantegories.find((c)=>(c == "Camas"))

resultCategorie ? console.log("Mostrar Subcategoría") : console.log("No existe")

let resultCategorieFilter = cantegories.filter((c)=>(c.startsWith('B')))
console.log(resultCategorieFilter)

// ES6
const servicesCharge = ['Grúa', 'Transporte de Marterial', "Herramientas"]
const servicesHeavyMachines = ['Volqueta', "Trailer", "Tractores", "Excavadoras"]

// ...REST Agrupa elementos restantes en un variable
const [machine1, machine2, ...machines] = servicesHeavyMachines
console.log(machines)

// ...SPREAD Expandir o fusionar elementos
let allServices = []
allServices = [...servicesCharge, ...servicesHeavyMachines]
console.log(allServices)

// --------------------------------------------------------------------------------------
// INTERMEDIO I
// Promesas 3 estados Pendiente - Rechazado - Completado

// Manipulación del DOM
// DOM - API PARA MANIPULAR LOS ELEMENTOS DE UN HTML
// HTML - SI o NO

// SI - MOTOR DE PLANTILLAS

// JS PURO - VANILLA JS

// PROGRAMACIÓN - IMPERATIVA


// PROGRAMACIÓN DECLARATIVA 
// REACT

// PROGRAMACION ASINCRONA

// - Callback

const getUserBDD = () => {console.log({id:123,name:'Pancho',rol:'admin'})}

setTimeout(getUserBDD,5000)

// CALLBACK - HELL

// PROMESAS
const conexionBDDExterna = (dataConecction) => {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        dataConecction ? resolve("Conexión - OK") : reject('Connetion - Bad')
    }, 3000);
  })
}

// Then y Catch 
conexionBDDExterna(false)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})

// Asyn - Await    
const verifyConnetion = async () => {
  try {
    console.log(await conexionBDDExterna(true))
  } catch (error) {
    console.log(error)
  }
}

verifyConnetion()

// Cuando se usa fetch juno con funciones flechas se debe devolver los valores
// para recuperar el json se debe colocar return o usar paréntesis
fetch('https://dog.ceo/api/breeds/image/random')
    // Implícito
    .then((request)=>(request.json()))
    // Explícito
//  . then((request)=>{ return request.json()})
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)})

// Usar async - aeait se requiere de una función padre
const getDog = async() => {
    
    try {
        let request = await fetch('https://dog.ceo/api/breeds/image/random')
        let data = await request.json()
        console.log(data)
    } catch (error) {
        console.log(error)   
    }
}

getDog()

const tokenG = "lerx9FDWD5PH78M207Cj95ac4KTt8G3v"
const urlG = "https://api.giphy.com/v1/stickers/trending"

fetch(`${urlG}?api_key=${tokenG}`)
    .then((request)=>(request.json()))
    .then((data)=>{console.log(data)})
    .catch((error)=>(console.log(error)))

const getGifs = async() => {
    
    try {
        let request = await fetch(`${urlG}?api_key=${tokenG}`)
        let data = await request.json()
        console.log(data)
    } catch (error) {
        console.log(error)   
    }
}

getGifs()

// Consumir una API privada para luego consumir una API pública
// https://face

// ADVANCE
// LOCAL STORAGE
// MÓDULOS
// COMMONJS = require
// ESMODULES = import o from

// ---------------------------------------------------------------------------

// BACKEBD DEVELOPERS
// STAGE 1 - FUNDAMENTOS AGNOSTICOS

// Libreria = solventa una sola cosa
// Framework = ayuda a resolver un problema mas complejo

// STAGE 2 - TRABAJAR EN UN PROYECTO 100% BACKEND

// STAGE 3 - PROYECTO FULLSTACK

// 10 SEMANAS