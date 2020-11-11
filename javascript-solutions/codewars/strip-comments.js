const solution = (input, markers) => {
  let words = [];
  let currentWord = [];
  let commented = false;
  const letters = input.split('');
  letters.forEach((el, i) => {
    if (commented) {
      if (el === '\n') {
        words.push([el]);
        commented = false;
      }
    } else if (markers.includes(el)) {
      words.push(currentWord);
      currentWord = [];
      commented = true;
    } else {
      currentWord.push(el);
    };
  });
  const trimmedW = words.map(phrase => phrase.join(''));

  const finalReply = trimmedW.map(group => {
    if (group === '\n') {
      return group;
    } else {
      return group.trim();
    };
  }).join('');

  return finalReply;
};