// TypeScript array misollari \ Union types bilan

const cars: (string | number | boolean)[] = ['BMW', 'Audi', 'Mercedes', 123, true];

const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

const bools: boolean[] = [true, false, true, true, false];

const uppercaseCars = cars.map(car => car.toString().toUpperCase());

console.log(uppercaseCars);