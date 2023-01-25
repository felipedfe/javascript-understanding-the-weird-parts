console.log("---------FUNCTIONAL-PROGRAMMING---------")
// Functional Programming

function myMap(arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i += 1) {
    newArray.push(fn(arr[i]))
  };

  return newArray;
};

const myArray = [1, 2, 3];

// A arrow function passada por parâmetro é executada para cada item do array em 'myMap'
const sumTwo = myMap(myArray, (item) => item + 2)

console.log(sumTwo);  // [2, 4, 5]
