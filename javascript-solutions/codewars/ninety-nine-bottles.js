const sing = () => {
  const bottleSyntax = (amount) => (amount === 1 ? "bottle" : "bottles");
  const createFirstLine = (currentAmount, anyLeft = true) => {
    return `${anyLeft ? currentAmount : "No more"} ${bottleSyntax(
      currentAmount
    )} of beer on the wall, ${currentAmount} ${bottleSyntax(
      currentAmount
    )} of beer.`;
  };

  const creatSecondLine = (nextAmount) => {
    return `Take one down and pass it around, ${nextAmount} ${bottleSyntax(
      nextAmount
    )} of beer on the wall.`;
  };

  const lastLine =
    "Go to the store and buy some more, 99 bottles of beer on the wall.";

  const song = [];

  for (let i = 99; i >= 0; i--) {
    if (i === 0) {
      song.push(createFirstLine("no more", false));
      song.push(lastLine);
    } else if (i === 1) {
      song.push(createFirstLine(1));
      song.push(creatSecondLine("no more"));
    } else {
      song.push(createFirstLine(i));
      song.push(creatSecondLine(i - 1));
    }
  }
  return song;
};
