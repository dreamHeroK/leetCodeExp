/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let l1 = 0,
    l2 = 0;
  while (l1 < typed.length) {
    if (typed[l1] === name[l2]) {
      l1++;
      l2++;
    } else if (typed[l1] === typed[l1 - 1]) {
      l1++;
    } else {
      return false;
    }
  }
  return typed.length === l1 && name.length === l2;
};
