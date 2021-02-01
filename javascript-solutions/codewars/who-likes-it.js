const likes = names => {
  let finalReply;
  
  switch (names.length) {
    case 0:
      finalReply = 'no one likes this';
      break;
    case 1:
      finalReply = `${names[0]} likes this`;
      break;
    case 2:
      finalReply = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      finalReply = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      finalReply = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      break;
  };
  
  return finalReply;
}