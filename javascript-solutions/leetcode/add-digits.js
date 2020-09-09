const addDigits = num => {
  let numSum = 0;
  num.toString().split('').forEach(chunk => {
    numSum += parseInt(chunk);
  });

  return numSum.toString().length === 1 ?
    numSum : 
    addDigits(numSum);
};