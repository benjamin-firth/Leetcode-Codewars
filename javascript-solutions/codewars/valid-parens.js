const validParentheses = parens => {
  let parensCounter = 0;
  let finalResult = true;

  parens.split('').forEach(paren => {
    paren === '(' ? parensCounter++ : parensCounter--;
    if (parensCounter < 0) finalResult = false;
  });

  if (parensCounter !== 0) finalResult = false;
  
  return finalResult;
}