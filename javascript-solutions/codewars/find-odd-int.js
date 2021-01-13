const findOdd = A => {
  const numCounts = A.reduce((acc, int) => {
    acc[int] ? acc[int]++ : acc[int] = 1;
    return acc;
  }, {});
  return parseInt(Object.keys(numCounts).find(key => numCounts[key] % 2 !== 0));
};