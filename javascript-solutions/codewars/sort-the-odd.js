const sortArray = array => {
  const oddArr = array.filter(el => el % 2 !== 0).sort((a,b) => a - b);
  let finalArr = [];
  array.forEach((el, i) => {
    if (el % 2 !== 0) {
      let currentOdd = oddArr[0];
      oddArr.shift();
      finalArr.push(currentOdd);
    } else {
      finalArr.push(el);
    };
  });
  return finalArr;
};