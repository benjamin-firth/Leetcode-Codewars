const dashatize = num => {
  if (Number.isNaN(num)) return 'NaN';
  if (num < 0) num = num * -1;
  
  let numArr = num.toString().split('');
  if (numArr.length === 1) return numArr[0];
  
  let lastNum;
  return numArr.map((el, i) => {
    if (el % 2 === 0) {
      lastNum = 'even';
      return el;
    } else if (el % 2 !== 0 && i !== numArr.length - 1) {
      if (i === 0) {
        lastNum = 'odd';
        return el + '-';
      } else if (lastNum === 'odd') {
        return el + '-';
      } else {
        lastNum = 'odd';
        return '-' + el + '-';
      }
    } else if (i === numArr.length - 1) {
      if (lastNum === 'odd') {
        return el;
      } else {
        return '-' + el;
      };
    };
  }).join('');
}