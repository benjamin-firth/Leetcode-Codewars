const partsSums = ls => {
  const lsLength = ls.length;
  let totals = [];

  for (let i = 0; i < lsLength; i++) {
    if (ls.length > 0) {
      let smallTotal = 0;
      ls.forEach(el => smallTotal += el);
      totals.push(smallTotal);
      ls.shift();
    };
  }

  totals.push(0);

  return totals;
};