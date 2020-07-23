const romanToInt = s => {
  const numerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  };
  
  const nums = s.split('')
  let counter = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 'I' && nums[i+1] === 'V') {
          i++;
          counter += 4;
      } else if (nums[i] === 'I' && nums[i+1] === 'X') {
          i++;
          counter += 9;
      } else if (nums[i] === 'X' && nums[i+1] === 'L') {
          i++;
          counter += 40;
      } else if (nums[i] === 'X' && nums[i+1] === 'C') {
          i++;
          counter += 90;
      } else if (nums[i] === 'C' && nums[i+1] === 'D') {
          i++;
          counter += 400;
      } else if (nums[i] === 'C' && nums[i+1] === 'M') {
          i++;
          counter += 900;
      } else {
          counter += numerals[nums[i]];
      };
  };
  return counter;
};