const whatCentury = year => {
  const hundoNum = year.split('');
  hundoNum.splice(2,2);
  let century = parseInt(hundoNum.join('')) + 1;
  if (parseInt(year) % 100 === 0) century --;
  let postDescriptor;

  switch (century.toString()[1]) {
    case '1':
      postDescriptor = 'st';
      break;
    case '2':
      postDescriptor = 'nd';
      break;
    case '3':
      postDescriptor = 'rd';
      break;
    default:
      postDescriptor = 'th';
  };
  if (century.toString()[0] === '1') postDescriptor = 'th';
  
  return `${century}${postDescriptor}`
};