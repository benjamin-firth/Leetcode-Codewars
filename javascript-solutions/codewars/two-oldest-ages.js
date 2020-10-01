const twoOldestAges = ages => {
  return ages.sort((a,b) => b-a).slice(0,2).reverse();
};