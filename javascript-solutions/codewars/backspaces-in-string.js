const cleanString = s => {
	const letters = s.split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "#") {
      if (i === 0) {
        letters.splice(0, 1);
        i--;
      } else {
        letters.splice(i - 1, 2);
        i-=2;
      };
    };
  };
  return letters.join("");
};