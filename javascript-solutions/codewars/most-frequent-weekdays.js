const mostFrequentDays = year => {
  const weekNums = {
    0 : 'Sunday',
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday',
  };
  
  const dayAmounts = {
    Monday : 0,
    Tuesday : 0,
    Wednesday : 0,
    Thursday : 0,
    Friday : 0,
    Saturday : 0,
    Sunday : 0
  };
  
  var d = new Date(year, 0, 1);
  const startDay = d.getDay();
  const isLeapYear = !(year & 3 || !(year % 25) && year & 15);
  let dayCounter = startDay;
  
  for (let i = 0; isLeapYear ? i < 366 : i < 365; i++) {
    dayAmounts[weekNums[dayCounter]]++;
    dayCounter === 6 ? dayCounter = 0 : dayCounter++;
  };
  
  return Object.keys(dayAmounts).filter(day => dayAmounts[day] === 53);
};