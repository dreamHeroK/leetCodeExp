var backspaceCompare = function (s, t) {
  let sArr = [],
    tArr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sArr.pop();
    } else {
      sArr.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tArr.pop();
    } else {
      tArr.push(t[i]);
    }
  }
  if (tArr.length === sArr.length && tArr.join("") === sArr.join("")) {
    return true;
  }
  return false;
};

const backspaceCompare = (s, t) => {
  let i = s.length - 1,
    j = t.length - 1;
  let jumpS = 0,
    jumpT = 0;
  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === "#") {
        jumpS++;
        i--;
      } else if (jumpS > 0) {
        jumpS--;
        i--;
      } else {
        break;
      }
    }
    while (j >= 0) {
      if (t[j] === "#") {
        jumpT++;
        j--;
      } else if (jumpT > 0) {
        jumpT--;
        j--;
      } else {
        break;
      }
    }
    if (i >= 0 && j >= 0) {
      if (s[i] !== t[j]) {
        return false;
      }
    } else {
      if (i >= 0 || j >= 0) {
        return false;
      }
    }
    i--, j--;
  }
  return true;
};
