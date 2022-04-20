// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// //ids.delete('lostValue')  // ignored if absent [no error thrown]
// if (ids.has('Hi')) {
//   ids.delete('Hi');
// }

// //for (const entry of ids.entries()) {
// for (const entry of ids.values()) {
//   //console.log(entry[0]);
//   console.log(entry);
// }

// const person1 = {name: 'Mister'};
// const person2 = {name: 'Person'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value)
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }

// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size)


let person = {name: 'Mister'};
const persons = new WeakSet();
persons.add(person);

// ... some operation
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra Info!');

person = null;
console.log(personData);