const hello = name => {
  if (!name) return "Hello, World!";
  let newName = name.split('').map(letter => letter.toLowerCase());
  newName[0] = newName[0].toUpperCase();
  return `Hello, ${newName.join('')}!`;
};