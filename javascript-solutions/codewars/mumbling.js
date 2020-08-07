const accum = s => {
  let lettersToAdd = 0;
  let finalLetters = []
  s.split('').forEach(char => {
    let initialAdd = `-${char.toUpperCase()}`
    finalLetters.push(initialAdd);
    for (let i = 0; i < lettersToAdd; i++) {
      finalLetters.push(char.toLowerCase());
    };
    lettersToAdd++;
  });
  finalLetters[0] = finalLetters[0].split('').pop();  
  return finalLetters.join('');
}