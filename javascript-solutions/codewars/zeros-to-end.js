const moveZeros = arr => {
  const zeros = [...arr].filter(el => el === 0);
  const noZeroArr = arr.filter(el => el !== 0);
  return [...noZeroArr, ...zeros];
};