const twoSum = (nums, target) => {
  let finalIndexes = [];
  nums.forEach((num, index) => {
      for (let i = 0; i < nums.length; i++) {
          if (i !== index && num + nums[i] === 9) {
              finalIndexes = [index, i]     
          }
      }
  });
  return finalIndexes
};