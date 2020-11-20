const cakes = (recipe, available) => {
  let totalCakes;
  let missingE = false;
  
  Object.keys(recipe).forEach((key, i) => {
    if (available[key] < recipe[key] && available[key]) missingE = true;
    if (i === 0 && available[key]) totalCakes = available[key] / recipe[key];
    if ((available[key] / recipe[key]) < totalCakes && available[key]) totalCakes = available[key] / recipe[key];
  });

  if (missingE || isNaN(totalCakes)) totalCakes = 0;
  
  return Math.floor(totalCakes);
}