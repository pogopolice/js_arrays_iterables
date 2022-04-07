// const numbers = [1, 2, 3];
// console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);
//
// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);
//
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);
//
// const personalData = [30, 'Bill', {moreDetail: []}]
//
// const analyticsData = [[1, 1.6], [-5.4, 2.1]]
//
// for (const data of analyticsData) {
  // for (const dataPoint of data) {
    // console.log(dataPoint);
  // }
// }
//
// console.log(personalData[1]); // retrieve name Bill


// const hobbies = ['Cooking', 'Sports']
// hobbies.push('Reading');  // add value to the END of the array
// hobbies.unshift('Coding');  // add value to the START of the array
// hobbies.pop(); // remove value from the END of the array
//  const poppedValue = hobbies.pop();
//  console.log(poppedValue);
// hobbies.shift();  // remove value from the START of the array
//
// console.log(hobbies);
//
//  Direct index access
// hobbies[1] = 'Programming';  // change the second element
// hobbies[5] = 'Collecting'; // skip over unused indexes (rarely used)
//
// console.log(hobbies, hobbies[4]);  // 4 is undefined
//
// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);
//
// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);



// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
////const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);
// 
// testResults.push(5.91);
// 
// console.log(storedResults, testResults);
// 
// console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));
// 
// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);
// 
// const personData = [{name: 'Max'}, {name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'}));  // returns -1 for not found
// 
// const manuel = personData.find((person, idx, persons) => {
  // return person.name === 'Manuel';
// });
// 
// manuel.name = 'Anna';
// 
// console.log(manuel, personData);
// 
// const maxIndex = personData.findIndex((person, idx, persons) => {
  // return person.name === 'Max';
// });
// 
// console.log(maxIndex);



const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
  // taxAdjustedPrices.push(price * (1 + tax))
// }

prices.forEach((price, idx, prices) => {
  const priceObj = {index: idx, taxAdjustedPrice: price * (1 + tax) }
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);