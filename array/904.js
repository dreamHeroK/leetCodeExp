var totalFruit = function (fruits) {
  let left = 0,
    res = 0,
    window = new Map();
  for (let right = 0; right < fruits.length; right++) {
    if (window.has(fruits[right])) {
      window.set(fruits[right], window.get(fruits[right]) + 1);
    } else {
      window.set(fruits[right], 1);
    }
    while (window.size > 2 && left < right) {
      let getMap = window.get(fruits[left]);
      if (getMap > 1) {
        window.set(fruits[left], getMap - 1);
      } else {
        window.delete(fruits[left]);
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
