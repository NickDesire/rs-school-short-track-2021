/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let result = -1;
  let first = 0;
  let last = array.length - 1;

  let isFounded = false;

  let middle;

  while (isFounded === false && first <= last) {
    middle = Math.floor((first + last) / 2);
    if (array[middle] === value) {
      isFounded = true;
      result = middle;
    } else if (array[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return result;
}
module.exports = findIndex;
