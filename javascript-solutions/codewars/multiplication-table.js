const multiplicationTable = size => {
  let finalTable = [];
  for (let i = 1; i <= size; i++) {
    let miniInterval = i;
    let miniNum = i;
    let miniTable = [];
    for (let j = 0; j < size; j++) {
      miniTable.push(miniNum);
      miniNum += miniInterval;
    };
    finalTable.push(miniTable);
  };
  return finalTable;
};