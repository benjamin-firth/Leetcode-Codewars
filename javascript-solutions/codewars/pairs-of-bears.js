const bears = (x, s) => {
  const matingPairs = [];
  
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let next = s[i + 1];
    
    if (current === 'B' && next === '8' || current === '8' && next === 'B') {
      matingPairs.push(current);
      matingPairs.push(next);
      i++;
    };
  };

  return [ matingPairs.join(''), matingPairs.length / 2 >= x ];
};