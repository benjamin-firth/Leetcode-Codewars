const strStr = (haystack, needle) => {
  if(needle === "") return 0;
  const stringSplice = haystack.split(needle);
  return stringSplice.length === 1 ? -1 : stringSplice[0].length;
};