/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let repeatCount = 1;

  const letters = str.split('');

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      repeatCount++;
    } else {
      if (repeatCount === 1) {
        result.push(letters[i]);
      } else {
        result.push(repeatCount.toString() + letters[i]);
      }
      repeatCount = 1;
    }
  }
  return result.join('');
}

module.exports = encodeLine;
