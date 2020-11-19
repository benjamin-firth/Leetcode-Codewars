const pigIt = str => {
  const punctuation = ['!', '.', '?'];
  const words = str.split(' ');
  
  return words.map(word => {
    let currentW = word.split('');
    let pigEnd = currentW[0] + 'ay';
    if (!punctuation.includes(currentW[0])) {
      currentW.shift();
      currentW = currentW.join('').concat(pigEnd);
      return currentW;
    } else {
      return currentW;
    }
  }).join(' ');
}