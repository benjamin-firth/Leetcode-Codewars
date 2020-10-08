const parseInt = string => {
  let numValue = {
    'zero': 0, 
    'one': 1, 
    'two': 2, 
    'three': 3, 
    'four': 4,
    'five': 5, 
    'six': 6, 
    'seven': 7, 
    'eight': 8, 
    'nine': 9,
    'ten': 10, 
    'eleven': 11, 
    'twelve': 12, 
    'thirteen': 13, 
    'fourteen': 14,
    'fifteen': 15, 
    'sixteen': 16, 
    'seventeen': 17, 
    'eighteen': 18, 
    'nineteen': 19,
    'twenty': 20, 
    'thirty': 30, 
    'forty': 40,
    'fifty': 50, 
    'sixty': 60, 
    'seventy': 70, 
    'eighty': 80, 
    'ninety': 90,
    'hundred': 100, 
    'thousand': 1000, 
    'million': 1000000
  };
  string = string.replace(/-/g, ' ');
  const nums = string.split(' ');
  let finalNum = 0;
  
  finalNum = nums.reduce((acc, num, i) => {
    if (num === 'and') return acc;
    if (num === 'hundred' || num === 'thousand' || num === 'million') {
      if (acc > 99 && num === 'thousand') {
        acc = acc * numValue[num];
      } else if (acc > 99 ) {
        let partOne = numValue[num] * numValue[nums[i - 1]];
        acc = acc + partOne - numValue[nums[i - 1]];
      } else {
        acc = acc * numValue[num];
      };
    } else {
      acc += numValue[num];
    };
    return acc;
  }, 0);
  
  return finalNum;
};