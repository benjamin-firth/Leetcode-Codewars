const isPalindrome = x => {
  if (x < 0) return false;
  const numArr = Array.from(String(x), Number);
  return x === parseInt(numArr.reverse().join(''));
};