const solve = arr => {  
  const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let results = [];
  arr.forEach(str => {
    let total = 0;
    str.split('').forEach((el, i) => {
      let lcEl = el.toLowerCase();
      if (i + 1 === alph.indexOf(lcEl) + 1) total++;
    });
    results.push(total);
  });
  return results;
};