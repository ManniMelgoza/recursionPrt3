/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// flatten` that takes a single array
function flatten(arr) {
  //Create an empty array to store all values
  let newArr = []

  for (let i = 0; i < arr.length; i++){

    if(Array.isArray(arr[i])){
      newArr = newArr.concat(flatten(arr[i]));
    }
    else{
      newArr.push(arr[i])
    }
  }
return newArr;
  // returns and array with all the nested
};

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
