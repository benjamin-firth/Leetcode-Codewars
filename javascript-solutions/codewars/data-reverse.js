const dataReverse = (data) => {
  let eightChunks = [];
  let currentChunk = [];
  let finalData = [];
  
  data.forEach(char => {
    currentChunk.push(char);
    if (currentChunk.length === 8) {
      eightChunks.push(currentChunk);
      currentChunk = []
    };
  });
  
  eightChunks.reverse().forEach(chunk => finalData = [...finalData, ...chunk]);
  
  return finalData;
}