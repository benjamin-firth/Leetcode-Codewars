const scramble = (str1, str2) => {
  let str1Copy = str1.split('');
  let finalResponse = true;
  str2.split('').forEach(el => {
    str1Copy.includes(el) ?
      str1Copy.splice(str1Copy.indexOf(el), 1) :
      finalResponse = false;
  });
  
  return finalResponse;
}
