var maxConsecutiveAnswers = function (answerKey, k) {
  let Tleft = 0,
    Fleft = 0,
    res = 0,
    Tcount = 0,
    Fcount = 0;
  for (let right = 0; right < answerKey.length; right++) {
    if (answerKey[right] === "T") {
      Tcount++;
    } else {
      Fcount++;
    }
    while (Tcount > k) {
      if (answerKey[Tleft] === "T") {
        Tcount--;
      }
      Tleft++;
    }
    while (Fcount > k) {
      if (answerKey[Fleft] === "F") {
        Fcount--;
      }
      Fleft++;
    }
    res = Math.max(res, right - Tleft + 1, right - Fleft + 1);
  }
  return res;
};

console.log(maxConsecutiveAnswers("TTFF", 2));
