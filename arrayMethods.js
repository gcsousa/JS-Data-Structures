/**************************************
 * File:  arrayMethods.js
 * We will review the following 9 javascript Array methods
 * 1. filter
 * 2. map
 * 3. find
 * 4. forEach
 * 5. some
 * 6. slice
 * 7. every
 * 8. reduce
 * 9. includes
 */

// Start with an items array that we'll use to apply each of the 9 methods above
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 2000 },
    { name: 'Keyboard', price: 25 },
    { name: 'Car', price: 10000 }
];

// filter:  filtering returns a new array of items the meet filter criteria
console.log('========= FILTER method ===========');
const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(filteredItems);

// Map: creates a new array based on the function with all elements in original array
console.log('========= MAP method ===========');
const itemNames = items.map((item) => {
    return { price: item.price, name: item.name };
});
console.log(itemNames);

// find:  returns the value of the first element in provided array that satisfies provided function
console.log('=======  FIND method ===========');
const found = items.find(el => el.price > 300);
console.log(found);

// forEach: executes a passed function once for each array element
console.log('========= forEach method ===========');
items.forEach((item) => {
    console.log(item.name);
});

// some: tests whether at least one of element from source array satisfies function provided
console.log('========= SOME method ===========');
const hasExpensiveItems = items.some((el) => {
    return el.price > 1000;
})
console.log(hasExpensiveItems);

//  slice: returns a shallow copy of a portion of the source array into a new array
//      selected from the start to end (or provided end)
console.log('========= SLICE method ===========');
// let just return the 3rd thru 6th element of the items array using slice
console.log(items.slice(2, 6));

// every: tests whether all elements of the array satisfy passed function and returns boolean
console.log('========= EVERY method ===========');
const allExpensiveItems = items.every((el) => {
    return el.price >= 5;
})
console.log(allExpensiveItems);


// reduce: executes a passed reducer function and returns a singe value
console.log('========= REDUCE method ===========');


const total = items.reduce((accum, el) => {  // el is current element of array
    return accum + el.price
}, 0);   // 0 is starting accum
console.log('Reduced item price for all items is: ' + total);


// includes: determines whether source array includes a certain value, returns true or false
console.log('========= INCLUDES method ===========');
const myNewArr = [1, 2, 3, 4, 5, 6, 7];
console.log(myNewArr.includes(3));   // prints true
console.log(myNewArr.includes(0));  // prints false