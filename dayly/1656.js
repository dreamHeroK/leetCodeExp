/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.ptr = 0;
  this.data = new Array(n);
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.data[idKey - 1] = value;
  if (this.data[this.ptr]) {
    let arr = [];
    while (this.data[this.ptr]) {
      arr.push(this.data[this.ptr++]);
    }
    return arr;
  }
  return [];
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
