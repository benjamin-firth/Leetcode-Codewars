const singleNumber = nums => {
  const numCount = {};
  let finalDigit;
  
  nums.forEach(num => {
      if (!numCount[num]) {
          numCount[num] = 1;
      } else {
          numCount[num]++;
      }
  });
  
  Object.keys(numCount).forEach(key => {
      if (numCount[key] === 1) {
          finalDigit = parseInt(key);
      };
  });
  
  return finalDigit;
};