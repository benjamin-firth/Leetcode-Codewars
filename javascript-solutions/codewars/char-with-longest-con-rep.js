const longestRepetition = s => {
  if (s === "") return  ["",0];
  
  const characters = s.split("");
  let longestRep = ["",0];
  let tempCount = {};

  const letterCount = characters.reduce((acc, char, index) => {
    if (index === 0) tempCount[char] = 1;
    if (acc[char]) {
      if (characters[index - 1] === char) {
        tempCount[char]++;
      } else {
        tempCount[char] = 1;
      };
      if (tempCount[char] > acc[char]) {
        acc[char] = tempCount[char];
      }
    } else {
      acc[char] = 1;
      tempCount[char] = 1;
    }
    return acc;
  }, {});

  Object.keys(letterCount).forEach(key => {
    if (letterCount[key] > longestRep[1]) {
      longestRep = [key, letterCount[key]]
    }
  });
  
  const finalChar = characters.find((char, i) => letterCount[char] === longestRep[1] && characters[i - 1] === char)

  return [finalChar, letterCount[finalChar]];
};