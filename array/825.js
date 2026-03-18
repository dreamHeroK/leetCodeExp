var numFriendRequests = function (ages) {
  ages.sort((a, b) => a - b);
  let res = 0;
  let left = 0,
    prevIndex = 0;
  for (let i = 0; i < ages.length; i++) {
    if (prevIndex !== i && ages[prevIndex] === ages[i] && ages[i] >= 15) {
      res += i - prevIndex;
    } else {
      prevIndex = i;
    }
    while (ages[left] <= ages[i] / 2 + 7 && left < i) {
      left++;
    }

    res += i - left;
  }

  return res;
};

console.log(numFriendRequests([73,106,39,6,26,15,30,100,71,35,46,112,6,60,110]));
