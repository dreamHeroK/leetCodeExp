var breakPalindrome = function (palindrome) {
  if (palindrome.length === 1) {
    return "";
  }
  let len = palindrome.length;
  let halfLen = len % 2 === 0 ? len / 2 : parseInt(len / 2);
  let index = -1;
  for (let i = 0; i < halfLen; i++) {
    if (palindrome[i] !== "a") {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    return palindrome.slice(0, index) + "a" + palindrome.slice(index + 1);
  } else {
    return palindrome.slice(0, len - 1) + "b";
  }
};

console.log(breakPalindrome("aaabbbbaaa"));
