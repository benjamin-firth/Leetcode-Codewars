const solve = s => {
  const caseCount = s.split('').reduce((acc, letter) => {
    letter === letter.toLowerCase() ? acc.lowerCase ++ : acc.upperCase ++;
    return acc;
  }, { upperCase: 0, lowerCase: 0 });
  
  const { upperCase, lowerCase } = caseCount;
  
  if (upperCase > lowerCase) {
    return s.toUpperCase();
  } else {
    return s.toLowerCase();
  };
}