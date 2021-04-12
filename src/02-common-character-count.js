/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;

  const arr = s1.split('');
  const arr2 = s2.split('');

  for (let i = 0; i < arr.length; i++) {
    const a = arr2.findIndex((x) => x === arr[i]);

    if (a >= 0) {
      result++;
      arr2.splice(a, 1);
    }
  }

  return result;
}

module.exports = getCommonCharacterCount;
