const runningSum = nums => {
  let runningSum = [];
  nums.reduce((acc, el) => {
      acc += el;
      runningSum.push(acc);
      return acc;
  }, 0)   
  return runningSum;
};