const martingale = (bank, outcomes) => {
  let stake = 100;
  outcomes.forEach(outcome => {
    if (outcome === 0) {
      bank -= stake;
      stake = stake * 2;
    } else if (outcome === 1 && stake !== 100) {
      bank += stake;
      stake = 100;
    } else {
      bank += stake;
    };
  });
  return bank;
};