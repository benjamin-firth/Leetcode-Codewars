const beggars = (values, n) => {
  const beggars = {};
  let beggarsList = [];
  let count = 0;
  
  for (let i = 1; i <= n; i++) {
    beggars[i] = 0;
    beggarsList.push(i)
  };
    
  values.forEach(num => {
    beggars[beggarsList[count]] += num;
    count === beggarsList.length - 1 ? count = 0 : count++;
  });
  
  return beggarsList.map(el => beggars[el]);
};