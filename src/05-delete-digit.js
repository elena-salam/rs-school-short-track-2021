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
  const digit = String(n).split('').map(Number);
  const min = Math.min(...digit);
  const idx = digit.indexOf(min);
  digit.splice(idx, 1);
  return Number(digit.join(''));
}

module.exports = deleteDigit;
