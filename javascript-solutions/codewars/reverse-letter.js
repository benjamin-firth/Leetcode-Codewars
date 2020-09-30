const reverseLetter = str => {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  return str
    .split('')
    .filter(el => alph.includes(el.toLowerCase()))
    .reverse()
    .join('');
};