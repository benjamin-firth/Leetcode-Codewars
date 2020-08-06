const plusOne = digits => {
  let num = BigInt(digits.join(''));
  num++;
  return num.toString().split('').map(el=>parseInt(el));
};