// const number = 50 % 3

// if (number === 0){
//     console.log('Even number')
// }
// else{
//     console.log('Odd number')
// }


// let side1 = 40
// let side2 = 40
// const side3 = 40

// if (side1 === side2 && side3 === side1){
//     console.log('Equilateral Triangle')
// }
// else if (side1 === side2 || side1 === side3 || side2 === side3){
//     console.log('Isosceles Triangle')
// }
// else {
//     console.log('Scalene')
// }

// let Day = 1

// while (Day <=200){
//     if (Day === 1){
//         console.log(Day + ' day')
//     }
// else {
//     console.log(Day + ' days')
// }
// Day = Day + 1
// }

// for (let Theoddones = 1; Theoddones <=50; Theoddones++){
//     if (Theoddones % 2 === 1){
//         console.log(Theoddones)
//     }
    
// }

// let Theevenones = 1

// while (Theevenones <=50){
//     if (Theevenones % 2 === 0){
//         console.log(Theevenones)
//     } Theevenones++
// }


let day = "Wednesday"

// if (day === "Friday"){
//     console.log("TGIF!")
// }
// else if (day === "Sunday"){
//     console.log("Happy Sunday")
// }
// else if (day === "Saturday"){
//     console.log("Thank God its weekend")
// }
// else if(day === "Wednesday"){
//     console.log ("Public holiday")
// }
// else {
//     console.log("Go to work")
// }

switch (day){
    case 'Friday':
        console.log('TGIF!')
        break 

    case 'Saturday':
        console.log("Thank God its weekend")
        break

    case 'Sunday':
        console.log("Happy Sunday")
        break

    case 'Wednesday':
        console.log ("Public holiday")
        break
    default:
            console.log("Go to work")
}