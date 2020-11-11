const formatDuration = seconds => {
  if (seconds === 0) return 'now';
  let newSeconds = seconds;
  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let finalStatement = '';
  
  if (seconds >= 31536000) {
    years = Math.floor(seconds / 31536000);
    newSeconds = seconds - (years * 31536000);
    years === 1 ? finalStatement = '1 year' : finalStatement = `${years} years`;
  };
  
  if (newSeconds >= 86400) {
    days = Math.floor(newSeconds / 86400);
    newSeconds = newSeconds - (days * 86400);
    if (finalStatement !== '') {
      days === 1 ? finalStatement = finalStatement + ', ' + '1 day' : finalStatement = finalStatement + ', ' + `${days} days`;
    } else {
      days === 1 ? finalStatement = finalStatement + '1 day' : finalStatement = finalStatement + `${days} days`;
    };
  };
  
  if (newSeconds >= 3600) {
    hours = Math.floor(newSeconds / 3600);
    newSeconds = newSeconds - (hours * 3600);
    if (finalStatement !== '') {
      hours === 1 ? finalStatement = finalStatement + ', ' + '1 hour' : finalStatement = finalStatement + ', ' + `${hours} hours`;
    } else {
      hours === 1 ? finalStatement = finalStatement + '1 hour' : finalStatement = finalStatement + `${hours} hours`;
    };
  };
  
  if (newSeconds >= 60) {
    minutes = Math.floor(newSeconds / 60);
    newSeconds = newSeconds - (minutes * 60);
    if (finalStatement !== '') {
      if (newSeconds === 0) {
        minutes === 1 ? finalStatement = finalStatement + ' and ' + '1 minute' : finalStatement = finalStatement + ' and ' + `${minutes} minutes`;
      } else {
        minutes === 1 ? finalStatement = finalStatement + ', ' + '1 minute' : finalStatement = finalStatement + ', ' + `${minutes} minutes`;
      }
    } else {
      minutes === 1 ? finalStatement = finalStatement + '1 minute' : finalStatement = finalStatement + `${minutes} minutes`; 
    };
  };
  
  if (newSeconds > 0) {
    if (finalStatement !== '') {
      newSeconds === 1 ? finalStatement = finalStatement + ' and ' + '1 second' : finalStatement = finalStatement + ' and ' + `${newSeconds} seconds`;
    } else {
      newSeconds === 1 ? finalStatement = finalStatement + '1 second' : finalStatement = finalStatement + `${newSeconds} seconds`;
    };
  };
  
  return finalStatement;
};
