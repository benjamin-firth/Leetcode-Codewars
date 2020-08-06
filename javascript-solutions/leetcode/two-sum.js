const twoSum = (nums, target) => {
  let finalIndexes = [];
  nums.forEach((num, index) => {
      for (let i = 0; i < nums.length; i++) {
          if (i !== index && num + nums[i] === target) {
              finalIndexes = [index, i]     
          }
      }
  });
  return finalIndexes
};