const wave = str => {
  let strEls = str.split('');
  let waves = [];
  
  strEls.forEach((el, i) => {
    if (el !== ' ') {
      let currentStr = strEls;
      currentStr[i] = currentStr[i].toUpperCase();
      waves.push(currentStr.join(''));
      currentStr[i] = currentStr[i].toLowerCase();
    };
  });
  
  return waves;
};
