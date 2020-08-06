// This one was interesting, as usually I would make a copy of it.  Also, when you splice in a forEach or for loop, it skips the next element, so I had to decrement back to stay in the correct order.

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    };
  };
  return nums;
};