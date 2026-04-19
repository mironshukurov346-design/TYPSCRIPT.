// 'tuple type' //кортеж
// const person: [string, number] = ['miron', 22];

// person.push('miron');

// console.log(person[0]);
// console.log(person[1]);
// // console.log(person[2]); //miron


// Tuples | union type
let coordinates: [number, string | number] = [98, 12]
console.log('1', coordinates)

coordinates = [12, 'east']
console.log('2', coordinates)

coordinates = [50, 33]
console.log('3', coordinates)


function getInfo(): [string, number] {
    return ['miron', 22]
}
 
const logger = getInfo();
console.log(logger[0]);
console.log(logger[1]);