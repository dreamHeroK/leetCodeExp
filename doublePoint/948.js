/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  if (tokens.length === 1) {
    if (power >= tokens[0]) {
      return 1;
    } else {
      return 0;
    }
  }
  tokens.sort((a, b) => a - b);
  let left = 0,
    right = tokens.length - 1,
    res = 0,
    c = 0;
  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      c++;
      left++;
    } else if (power < tokens[left] && c > 0) {
      res = Math.max(res, c);
      power += tokens[right];
      right--;
      c--;
    } else {
      break;
    }
  }
  return Math.max(res, c);
};

console.log(bagOfTokensScore([58, 91], 50));
