const averages = (numbers) => {
  if (numbers === null) return [];

  const finalNumI = numbers.length - 1;

  return numbers.map((num, i) => {
    if (i !== finalNumI) return (num + numbers[i + 1]) / 2;
  }).filter(num => num !== undefined);
};