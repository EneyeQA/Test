// object = Property (key & value pair)


// const myObject = {name: 'car', color:'red', price: 2500}

// console.log(myObject.name)

// const door = {
//     isOpen: false,
//     material: 'wood',
//     height: 8,
//     toggleOpenAndClose: function(){
//         if(door.isOpen === false) {
//             door.isOpen = true
//         } else {

//         }
//     }
// } 
// door.toggleOpenAndClose()
// console.log(door.isOpen)

// const person = {
//     name:'Nick',
//     age: 30,
//     siblings: ['Richard', 'Ken', 'Jane'],
//     addSibling: function (name){
//         person.siblings.push(name)
//     }
// }
// person.addSibling('Henry')
// person.hairColor = 'Black'
// console.log(person)



// OMPLEX DATA STRUCTURE
//  const person = {
//     name:'Nick',
//     age: 30,
//     siblings: [
//         {
//             name: "richard",
//             age: 34,
//         },
//         {
//             name: "Ken",
//             age: 21,
//         },
//         {
//             name: "jane",
//             age: 17,
//         }
//     ],
//     addSibling: function (name){
//         person.siblings.push(name)
//     }
// }
// person.addSibling({
//     name: "Henry",
//     age: 11,
// })
// person.hairColor = 'Black'
// console.log(person)


// JASON=JAVASCRIPT OBJECT NOTATION(Its the format in which we post and recieve data from a web server, it is identical to javascript.)

const myObject = {
    name: "vehicle",
    type: "Car",
    color: "Black"
}
// to convert json to js objects
// const json = JSON.stringify(myObject)
// console.log(json)

// to convert js to json objects
const json = JSON.stringify(myObject)
console.log(JSON.parse(json))