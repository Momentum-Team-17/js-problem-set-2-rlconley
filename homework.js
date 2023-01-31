// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.
function remove(array, potentialMember) {
  // currently does not work for multiple occurrences of the potential member in the array
  let newArray = [];
  // make an empty array
  for (let person of array) {
    // console.log(`person = ${person}`);
    // if person does not match the potentialMember then push them into the new array
    if (person !== potentialMember) {
      newArray.push(person);
    }
  }
  //   console.log(newArray);
  return newArray;
}

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
// example [1, 2, 3, 4]
function sum(numArray) {
  let sum = 0;
  for (let number of numArray) {
    // console.log(`number: ${number}`);
    // this is a template literal
    sum += number;
    // this is the same as sum = sum + number
    // console.log(`sum: ${sum}`);
  }
  return sum;
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.
function average(numArray) {
  let average;
  // average starts off as undefined
  if (numArray.length > 0) {
    // only do the calculation if the array is not empty
    average = sum(numArray) / numArray.length;
    // reassign average after calculated
  }
  return average;
}

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.
// example [3, 6, 5, 10, 1, 2, 1, 0]
function minimum(numArray) {
  // declares and names the function, lists parameter(s)
  let minimum;
  // declare the variable, starts at undefined
  if (numArray.length > 0) {
    // conditional, if there is anything in the array, else go to line 78
    minimum = numArray[0];
    // give the minimum a starting point as first number in array
    console.log(`starting minimum: ${minimum}`);
    for (let number of numArray) {
      // for ... of loop
      console.log(`current number: ${number}`);
      if (number < minimum) {
        // conditional, check if the number is smaller than minimum
        minimum = number;
        // if so, redefine minimum
        console.log(`new minimum: ${minimum}`);
      }
      // close conditional line 68 here
    }
    // closes for of loop
  }
  // closes conditional line 60
  return minimum;
}
// closes function

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// let arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
