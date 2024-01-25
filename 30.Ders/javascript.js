// DESTRUCİON

const vehicles = ["ford","mustang","opel"]
const car1 = vehicles[0]
console.log(car1)
const [car2,car3,car4] = vehicles
console.log(car3)


const person = {
    name:"Barış",
    age: 14,
    location:"Turkey",
    like: "Hamburger"
}
const {name:name1,age,like} = person
console.log(name1)


const vehicleOne = {
    brand: "Ford",
    model: "mustang",
    type: "car",
    year: 2021,
    color: "red"
}
function myVehicles({type,color,brand,model}){
    const message = `My ${type} is a ${color} ${brand} ${model}`
    console.log(message)
}
myVehicles(vehicleOne)



// SPREAT OPERATOR

const numberOne = [1,2,3]
const numberTwo = [4,5,6]
const numberCombined = [...numberOne,...numberTwo]
console.log(numberCombined)

const numbers = [1,2,3,4,5,6];
const [one,two,...rest] = numbers
// Resr geri kalan elemanları gösterir(en sona konur)
console.log(rest)

const object1 = {
    a: "a",
    b: "b",
    c: "c"
}
const object2 = {
    d: "d",
    e: "e",
    f: "f"
}
const totalObject = {...object1,...object2}
console.log(totalObject)
