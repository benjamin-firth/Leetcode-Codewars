const reverse_and_combine_text = str => {
  const words = str.split(' ');
  if (words.length === 1) return words[0];
  
  const combineWords = wordList => {
    if (wordList.length === 1) return wordList[0];
    let createdWords = [];
        
    for (let i = 0; i < wordList.length; i += 2) {
      let firstWord = wordList[i].split('').reverse().join('');
      if (i === wordList.length - 1) {
        createdWords.push(firstWord);
      } else {
        let secondWord = wordList[i + 1].split('').reverse().join('');
        createdWords.push(`${firstWord + secondWord}`);
      };
    };
    
    return combineWords(createdWords);
  };
  
  return combineWords(words);
};