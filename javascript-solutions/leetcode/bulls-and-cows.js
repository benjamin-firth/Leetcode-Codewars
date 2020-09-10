const getHint = (secret, guess) => {
  const secretNums = secret.split('');
  const guessNums = guess.split('');
  let cows = 0;
  let bulls = 0;

  const secretInfo = secretNums.reduce((acc, num) => {
    acc[num] ? acc[num]++ : acc[num] = 1;
    return acc;
  }, {});

  const guessInfo = guessNums.reduce((acc, num) => {
    acc[num] ? acc[num]++ : acc[num] = 1;
    return acc;
  }, {});

  Object.keys(guessInfo).forEach(key => {
    if (secretInfo[key]) {
      secretInfo[key] < guessInfo[key] ?
        cows += secretInfo[key] :
        cows += guessInfo[key];
    };
  });

  guessNums.forEach((num, i) => {
    if (secretNums[i] === num) bulls++;
  });
  
  cows = cows - bulls;
  
  return `${bulls}A${cows}B`;
};