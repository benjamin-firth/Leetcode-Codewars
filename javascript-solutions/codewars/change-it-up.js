const changer = (str) => { 
  const vowels = ['a','e','i','o','u'];
  const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const replstr = str.toLowerCase().split('').map((el) => {
    if(alph.includes(el)) {
      return el === 'z' ? 'a' : alph[alph.indexOf(el) + 1];
    } else {
      return el;
    };
  });
  return replstr.map(el => vowels.includes(el) ? el.toUpperCase() : el).join('');
};