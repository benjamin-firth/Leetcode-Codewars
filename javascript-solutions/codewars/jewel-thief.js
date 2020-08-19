const crack = safe => {  
  const lastNum = (startNum, direction, firstTwoCombo) => {
    if (startNum < 100) {
      const newNum = startNum + 1;
      const combo = startNum.toString().length === 1 ? `${firstTwoCombo}-${direction}0${startNum}` : `${firstTwoCombo}-${direction + startNum}`;
      const safeResult = safe.unlock(combo);      

      if (safeResult === 'click-click-click') {
        const safeContents = safe.open();
        return safeContents
      } else if (startNum === 99) {
        if (direction === "R") {
          return lastNum(00, "L", firstTwoCombo);
        } else {
          return lastNum(00, "R", firstTwoCombo);
        }
      } else {
        return lastNum(newNum, direction, firstTwoCombo)
      }
    };
  };
  
  const secondNum = (startNum, direction, firstCombo) => {
    if (startNum < 100) {
      const newNum = startNum + 1;
      const combo = startNum.toString().length === 1 ? `${firstCombo}-${direction}0${startNum}` : `${firstCombo}-${direction + startNum}`;
      const safeResult = safe.unlock(combo);      

      if (safeResult === 'click-click') {
        return lastNum(00, 'R', combo);
      } else if (startNum === 99) {
        if (direction === "R") {
          return secondNum(00, "L", firstCombo);
        } else {
          return secondNum(00, "R", firstCombo);
        }
      } else {
        return secondNum(newNum, direction, firstCombo)
      }
    };
  };
  
  const firstNum = (startNum, direction) => {
    if (startNum < 100) {
      const newNum = startNum + 1;
      const combo = startNum.toString().length === 1 ? `${direction}0${startNum}` : `${direction + startNum}`;
      const safeResult = safe.unlock(combo);      

      if (safeResult === 'click') {
        return secondNum(00, 'R', combo);
      } else if (startNum === 99) {
        if (direction === "R") {
          return firstNum(00, "L");
        } else {
          return firstNum(00, "R");
        }
      } else {
        return firstNum(newNum, direction)
      }
    };
  };
  
  return firstNum(00, "L");
};
