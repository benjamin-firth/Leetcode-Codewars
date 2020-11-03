const evenOrOdd = str => {
  const numTotal = str.split('').reduce((acc, num) => {
    parseInt(num) % 2 === 0 ? acc.even += parseInt(num) : acc.odd += parseInt(num);
    return acc;
  }, {odd: 0, even: 0});
  if (numTotal.odd === numTotal.even) {
    return 'Even and Odd are the same';
  } else if (numTotal.odd > numTotal.even) {
    return 'Odd is greater than Even';
  } else {
    return 'Even is greater than Odd';
  };
};