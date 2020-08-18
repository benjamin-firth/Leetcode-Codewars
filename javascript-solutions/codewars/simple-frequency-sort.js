const solve = arr => {
  const numFrequencies = {};
  const freqCount = {};
  let finalArr = [];
  
  arr.forEach(num => {
    numFrequencies[num] ? numFrequencies[num] ++ : numFrequencies[num] = 1;
  });
    
  Object.keys(numFrequencies).forEach(key => {
    freqCount[numFrequencies[key]] ? 
    freqCount[numFrequencies[key]].push(key) : 
    freqCount[numFrequencies[key]] = [key];
  });
  
  const reversedCount = Object.keys(freqCount).reverse();
  
  reversedCount.forEach(key => {
    freqCount[key].map(num => {
      let numSection = new Array(parseInt(key)).fill(parseInt(num));
      finalArr = [...finalArr, numSection];
    });
  });
  
  finalArr = [].concat(...finalArr);
  
  return finalArr;
};