const alphabetPosition = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return text
    .split('')
    .map((el) => alphabet.indexOf(el.toLowerCase()) + 1)
    .filter(el => el !== 0)
    .join(' ');
}