/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const symbols = email.split('').reverse();
  const result = [];
  let point = 0;

  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i] === '@' && point === 0) {
      point = i;
    }
  }
  for (let i = 0; i < point; i++) {
    result.push(symbols[i]);
  }
  return result.reverse().join('');
}

module.exports = getEmailDomain;
