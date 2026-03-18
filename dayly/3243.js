var shortestDistanceAfterQueries = function (n, queries) {
  let len = queries.length;
  let res = [];
  let minLength = [];

  for (let i = 0; i < len; i++) {
    if (!minLength.length) {
      minLength.push(queries)[i];
    }else{
        
    }
    let length = n;
    for (let j = 0; j < minLength.length; j++) {
      length -= minLength[i][1] - minLength[i][0] + 1;
    }
    res.push(length);
  }
};
