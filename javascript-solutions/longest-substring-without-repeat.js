const lengthOfLongestSubstring = s => {
  const sArray = s.split('');
  let longestString = [];
  
  const getSubString = (el, arr) => {
      let subString = [el];
      let errorCount = 0;
      for (let i = 1; i < arr.length; i++) {
          if (subString.includes(arr[i])) {
              errorCount++;
          } else if (!subString.includes(arr[i]) && errorCount === 0) {
              subString.push(arr[i])
          };
      };
      return subString;
  };

  let iterableArr = [...sArray];
  
  sArray.forEach(el => {
      const newArr = getSubString(el, iterableArr);
      if (newArr.length > longestString.length) longestString = newArr;
      iterableArr.shift();
  });
  
  return longestString.join('').length;
};