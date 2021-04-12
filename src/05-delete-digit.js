/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const res = [];
  const arr = n.toString().split('').map(Number);
  const max = arr.indexOf(Math.max(...arr));
  let remove = 0;

  if (max === 0) {
    remove = max + 1;
  } else {
    remove = max - 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i !== remove) {
      res.push(arr[i]);
    }
  }
  return +res.join('');
}

module.exports = deleteDigit;
