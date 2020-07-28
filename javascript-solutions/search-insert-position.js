const searchInsert = (nums, target) => {
  if(nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    let indexPosition;
    if (target > nums[nums.length - 1]) {
        indexPosition = nums.length;
    } else if (target < nums[0]) {
        indexPosition = 0;
    } else {
        nums.forEach((num, i) => {
            if(num < target && nums[i+1] > target) indexPosition = i + 1;
        });
    };
    return indexPosition
  };
};