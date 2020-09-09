const rot13 = message => {
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const sipher = message.split('').map(char => {
    if (!alph.includes(char.toLowerCase())) return char;
    let charSpot = alph.indexOf(char.toLowerCase());
    let sipherSpot = charSpot > 12 ? charSpot - 13 : charSpot + 13;
    return char.toUpperCase() === char ? alph[sipherSpot].toUpperCase() : alph[sipherSpot];
  });
  return sipher.join('');
};