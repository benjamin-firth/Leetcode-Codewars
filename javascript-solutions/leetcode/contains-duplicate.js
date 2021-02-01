const containsDuplicate = nums => {
  const numCount = {};
  
  for (let i = 0; i < nums.length; i++) {
    if (!numCount[nums[i]]) {
      numCount[nums[i]] = 1;
    } else {
      return true;
    };
  };
  return false;
};