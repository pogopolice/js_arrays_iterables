const assignment1 = [1, 3, 7, 11, 23];
// const assignment1 = [1, 2, 3, 4, 5, 6];
console.log(assignment1);

const greaterFive = assignment1.filter(num => num > 5)
console.log(`Greater than 5: ${greaterFive}`);

// let assignment1Object = new Object()
// assignment1Object.num = assignment1.join()
// console.log(`Map numbers to an object: ${assignment1Object.num}`);
const assignment1Object = assignment1.map(val => ({num: val}));
console.log(assignment1Object);

const assignment1Product = assignment1.reduce(
  (preVal, currVal) => preVal * currVal
);
console.log(`Use reduce to find product: ${assignment1Product}`);


function findMax(num) {
  console.log(Math.max(...num));
}

findMax(assignment1);

function findMinMax(num) {
  let minMaxArray = new Array();
  minMaxArray.push(Math.min(...num))
  minMaxArray.push(Math.max(...num))
  console.log(minMaxArray);
  [ min, max ] = minMaxArray;
  console.log(min, max);
}

findMinMax(assignment1);

const set1 = new Set([1, 2, 3, 4, 5]);
set1.add(6)
console.log(set1);