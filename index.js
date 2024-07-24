// let name = window.prompt("Whats ur Name");

console.log(name);
console.log("Sandesh")
a = 1
b = 2
console.log(a + b)

var str = 'hello';
var str1 = 'Sadndesh';
console.log(str, str1)

// obj creation
//var obj = {
//num: 10,
// key: 'value',

//}
//console.log(obj)

// Array
//var array = [1, 3, 3, 'Sandesh', true, [1, 1, 1, 1]];
//console.log(array)
//array.push(10)

//operator
console.log(!true)
console.log(!!true)
console.log(!!"")
console.log(!!{}) // true auxa
console.log(!![])

// condition operators.... loops
//var obj = {
//id: 1,
//   name: 'jonny'
//};

//var keys = object.keys(obj);

//for (var i = 0; i < keys.length; i++) {
//var key = keys[i];
// var value = obj[key];
// console.log(key, value);

//}

// js function
//function sum(a, b) {
//  return a + b;
//}
//console.log(sum(2, 3));
//console.log(sum(2, 3, 4))

//
//string to number
const x = 23
const y = "Ram"

console.log(String(x))

//

const upper = "Hello world"
console.log(upper.toLowerCase())
console.log(upper.toUpperCase())  // upper case and lower case
console.log(upper.split('').reverse().join(''))  //split an reverse


// convert arrry to object to array
/*
let array = [1, "Sandeh", "Nepal"]

const result = Object.fromEntries(array)
console.log(result)

const Object = {
    number: 1, name: 'Sandeh', country: 'Nepal'
}
const result1 = Object.entries(Object)
console.log(result1)

*/
/* duplicate array
const array = [1, 2, 2, 3, 3, 4, 4, 5, 5, 1]
const output = [...new Set(array)]   // removes duplicates
console.log(output)

/*map and filter
const array1 = [1, 2, 3, 4, 5]
const output1 = array.reduce((acc,num)=>acc+num)
console.log(output1)
const output1 = array1.map((item, index)=> item*2)
const filteroutput1
*/

//map filter active user ...
const userName = [
    { id: 1, name: 'Alice', age: 25, isActive: true, price: 1000 },
    { id: 2, name: 'Bob', age: 30, isActive: false, price: 1300 },
    { id: 3, name: 'Charlie', age: 35, isActive: true, price: 5600 },
]
/*
const result = userName.filter((item, index) => {
return item.isActive
}).map((item, index) => {
return item.name
}).reduce((acc, num) => {
return acc + num
})
console.log(result)
*/

const result = userName.filter((item, index) => {
    return item.isActive
})
result.map((item, index) => {
    return item.name

})
result.reduce((acc, num) => {
    return acc + num
})
console.log(result)c











