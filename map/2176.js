var countPairs = function (nums, k) {
  let map = {},
    res = 0;
  nums.forEach((item, index) => {
    if (map[item]) {
      res += map[item].filter((item) => (item * index) % k === 0).length;
      map[item].push(index);
    } else {
      map[item] = [index];
    }
  });
  return res;
};
