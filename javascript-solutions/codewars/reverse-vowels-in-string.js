const reverseVowels = (str) => {
  const vowelList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const vowelsInString = [];
  const stringLetters = str.split("");

  stringLetters.forEach((letter) => {
    if (vowelList.includes(letter)) vowelsInString.push(letter);
  });

  return stringLetters
    .map((letter) => {
      let letterToReturn = letter;
      if (vowelList.includes(letter)) {
        letterToReturn = vowelsInString[vowelsInString.length - 1];
        vowelsInString.pop();
      }
      return letterToReturn;
    })
    .join("");
};
