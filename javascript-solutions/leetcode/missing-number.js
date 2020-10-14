const missingNumber = nums => {
  const range = nums.length;
  for (let i = 0; i <= range; i++) {
      if (!nums.includes(i)) return i;
  };
};