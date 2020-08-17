const alternateCase = s => {
  return s.split("").map(char => {
    if (char.toLowerCase() === char) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    };
  }).join("");
}