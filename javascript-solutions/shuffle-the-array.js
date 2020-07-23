const shuffle = (nums, n) => {
  let xArr = nums.splice(0,n)
  let yArr = nums.splice(0,n)
  let shuffledArr = []
  for (let i = 0; i < n; i++) {
      shuffledArr.push(xArr[i]);
      shuffledArr.push(yArr[i]);
  };
  return shuffledArr;      
};