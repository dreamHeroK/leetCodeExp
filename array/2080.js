/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
  this.arr = arr;
  this.cache = new Map();
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
  let count = 0;
  if (this.cache.get(left + "-" + right + "-" + value)) {
    return this.cache.get(left + "-" + right + "-" + value);
  }
  for (let i = left; i <= right; i++) {
    if (this.arr[i] === value) {
      count++;
    }
  }
  this.cache.set(left + "-" + right + "-" + value, count);
  return count;
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
