const reverse = x => {
  const negative = x < 0;
  let numArr = parseInt(Array.from(String(x), Number).reverse().join(''));
  if (negative) numArr = numArr * -1;
  if (numArr > 2147483647 || numArr < -2147483647) return 0;
  return numArr;
};