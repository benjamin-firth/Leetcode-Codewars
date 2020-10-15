const removeParentheses = s => {
  let startDeleteCount = 0;
  let newLetters = [];
  s.split('').forEach(el => {
    if (el === '(') {
      startDeleteCount++;
    } else if (el === ')') {
      startDeleteCount--;
    } else if (startDeleteCount < 1) newLetters.push(el);
  });
  return newLetters.join('');
}