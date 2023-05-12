const makeValley = (arr) => {
  const sortedArr = arr.sort((a, b) => b - a);

  let rightWing = [];
  let leftWing = [];

  sortedArr.forEach((num, i) => {
    if (i % 2 === 0) {
      rightWing.push(num);
    } else {
      leftWing.push(num);
    }
  });

  leftWing = leftWing.reverse();
  return [...rightWing, ...leftWing];
};
