const isValid = s => {
  const bVC = {
    finalCheck: true,
    recentOpened: [],
    curlyCount: 0,
    squareCount: 0,
    parenCount: 0,
    "{": () => {
      bVC.recentOpened.push("{");
      bVC.curlyCount++
    },
    "}": () => {
      if(bVC.recentOpened[bVC.recentOpened.length - 1] !== "{") bVC.finalCheck = false;
      bVC.curlyCount--;
      bVC.recentOpened.pop();
    },
    "[": () => {
      bVC.recentOpened.push("[");
      bVC.squareCount++
    },
    "]": () => {
      if(bVC.recentOpened[bVC.recentOpened.length - 1] !== "[") bVC.finalCheck = false;
      bVC.squareCount--;
      bVC.recentOpened.pop();
    },
    "(": () => {
      bVC.recentOpened.push("(");
      bVC.parenCount++
    },
    ")": () => {
      if(bVC.recentOpened[bVC.recentOpened.length - 1] !== "(") bVC.finalCheck = false;
      bVC.parenCount--;
      bVC.recentOpened.pop();
    },
  };
  
  s.split('').forEach(char => {
    if(bVC.curlyCount === -1 || bVC.squareCount === -1 || bVC.parenCount === -1) bVC.finalCheck = false;
    bVC[char]();
  });

  if(bVC.curlyCount === 0 && bVC.squareCount === 0 && bVC.parenCount === 0 && bVC.finalCheck) {
    return true;
  } else {
    return false;
  };
};