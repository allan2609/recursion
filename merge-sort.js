function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, midIndex);
  const secondHalf = arr.slice(midIndex);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);

  return merge(sortedFirstHalf, sortedSecondHalf);
}

function merge(arr1, arr2) {
  let mergedArray = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      mergedArray.push(arr1.shift());
    } else if (arr1[0] > arr2[0]) {
      mergedArray.push(arr2.shift());
    } else if ((arr1[0] === arr2[0])) {
      mergedArray.push(arr1.shift());
    }
  }
  return mergedArray.concat(arr1).concat(arr2);;
}

module.exports = {
  mergeSort,
  merge
}

/* To run this in Terminal:

cd to the correct folder
Type "node"
Enter "const { mergeSort, merge } = require("./merge-sort");"
Type "mergeSort(yourArray);" to sort your array. */
