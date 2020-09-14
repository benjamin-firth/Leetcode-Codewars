const dup = (s) => {
  return s.map(word => {
    let currentLetter;
    let nonDupes = [];
    
    word.split('').map((letter) => {
      if (letter !== currentLetter) {
        currentLetter = letter;
        nonDupes.push(letter);
      };
    });
    
    return nonDupes.join('');
  });
};