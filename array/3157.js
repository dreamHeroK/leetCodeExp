var occurrencesOfElement = function (nums, queries, x) {
  let indexArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === x) {
      indexArr.push(i);
    }
  }
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    if (indexArr[queries[i] - 1] !== undefined) {
      res.push(indexArr[queries[i] - 1]);
    } else {
      res.push(-1);
    }
  }
  return res;
};
