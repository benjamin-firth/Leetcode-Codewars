const anagrams = (word, words) => {
  let matchedWords = [];
  const sortedInitial = word.split('').sort().join();
  
  words.forEach(choice => {
    let sortedChoice = choice.split('').sort().join();
    if (sortedInitial == sortedChoice) {
      matchedWords.push(choice);
    };
  });

  return matchedWords;
}