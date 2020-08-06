const solve = str => {
  const letters = str.split('');
  const spaceIndexes = letters.map((char, i) => {
    if (char === ' ') return i;
  }).filter(Boolean);
  let reversedStr = letters.filter(char => char !== ' ').reverse();
  
  spaceIndexes.forEach(i => reversedStr.splice(i,0,' '));
  
  return reversedStr.join('');
}