const validISBN10 = isbn => {
  let isSuccessful = true;
  const digits = isbn.split('');
  
  if (digits.length < 10) isSuccessful = false;
  
  const addedIsbn = digits.reduce((acc, num, i) => {
    if (i === 9 && num === 'X') {
      acc += 10 * (i + 1);
    } else if (i < 9 && parseInt(num) === 'NaN'){
      isSuccessful = false;
    } else {
      acc += num * (i + 1);
    }
    return acc;
  }, 0);
  
  return addedIsbn  % 11 === 0 && isSuccessful;
};