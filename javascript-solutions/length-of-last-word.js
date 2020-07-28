const lengthOfLastWord = s => {
  const words = s.split(' ').filter(Boolean);
  if (words.length === 0) return 0;
  return words[words.length - 1].split('').length;
};