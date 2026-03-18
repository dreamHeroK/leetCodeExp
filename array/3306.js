var countOfSubstrings = function (word, k) {
  let arr1 = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    },
    arr2 = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    },
    sum1 = 0,
    sum2 = 0,
    left1 = 0,
    left2 = 0,
    res = 0;
  for (let i = 0; i < word.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(word[i])) {
      arr1[word[i]]++;
      arr2[word[i]]++;
    } else {
      sum1++;
      sum2++;
    }
    while (
      left1 <= i &&
      !Object.values(arr1).some((item) => item === 0) &&
      sum1 >= k
    ) {
      if (["a", "e", "i", "o", "u"].includes(word[left1])) {
        arr1[word[left1]]--;
      } else {
        sum1--;
      }
      left1++;
    }
    while (
      left2 <= i &&
      !Object.values(arr2).some((item) => item === 0) &&
      sum2 > k
    ) {
      if (["a", "e", "i", "o", "u"].includes(word[left2])) {
        arr2[word[left2]]--;
      } else {
        sum2--;
      }
      left2++;
    }
    res += left1 - left2;
  }
  return res;
};

console.log(countOfSubstrings("iqeaouqi", 2));
