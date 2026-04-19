"use strict";
// 'tuple type' //кортеж
// const person: [string, number] = ['miron', 22];
Object.defineProperty(exports, "__esModule", { value: true });
// person.push('miron');
// console.log(person[0]);
// console.log(person[1]);
// // console.log(person[2]); //miron
// Tuples | union type
let coordinates = [98, 12];
console.log('1', coordinates);
coordinates = [12, 'east'];
console.log('2', coordinates);
coordinates = [50, 33];
console.log('3', coordinates);
function getInfo() {
    return ['miron', 22];
}
const logger = getInfo();
console.log(logger[0]);
console.log(logger[1]);
//# sourceMappingURL=app.js.map