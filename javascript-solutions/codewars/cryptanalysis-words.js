const wordPattern = word => {
  let runningCount = 0;
  let previousLetters = {};
  let cipher = [];
  
  word.split("").forEach(letter => {
    if (!Object.keys(previousLetters).includes(letter.toLowerCase())) {
      cipher.push(runningCount);
      previousLetters[letter.toLowerCase()] = runningCount;
      runningCount++;
    } else {
      cipher.push(previousLetters[letter.toLowerCase()]);
    };
  });
  
  return cipher.join(".");
}