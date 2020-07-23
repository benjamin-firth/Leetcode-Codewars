const lengthOfLongestSubstring = s => {
  const sArray = s.split('');
  let longestString = [];
  let iterableArr = [...sArray];
  
  sArray.forEach(el => {
      let subString = [el];
      let errorCount = 0;
      for (let i = 1; i < iterableArr.length; i++) {
          if (subString.includes(iterableArr[i])) {
              errorCount++;
          } else if (!subString.includes(iterableArr[i]) && errorCount === 0) {
              subString.push(iterableArr[i])
          };
      };
      if (subString.length > longestString.length) longestString = subString;
      iterableArr.shift();
  });
  
  return longestString.join('').length;
};