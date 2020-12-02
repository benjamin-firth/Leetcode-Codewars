const topThreeWords = text => {
  const isLetter = str => str.length === 1 && str.match(/[a-z]/i);
  
  const lwrText = text
    .split('')
    .filter(el => isLetter(el) || el === "'" || el === ' ')
    .map(el => el.toLowerCase())
    .join('');
  
  const words = lwrText.split(' ').filter(word => word !=="'");
  
  const wordCount = words.filter(word => word !== '').reduce((acc, word) => {
    acc[word] ? acc[word]++ : acc[word] = 1;
    return acc;
  }, {});
  
  const sorted = Object.keys(wordCount).sort((a,b) => wordCount[b] - wordCount[a]);
  
  return sorted.slice(0,3);
}