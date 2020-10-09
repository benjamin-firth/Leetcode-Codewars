const solution = list => {
  let startRange = null;
  let prevElInRange = null;
  let newList = [];
  list.forEach((el, i) => {
    if (list[i + 1] === el + 1 && list[i + 2] === el + 2 && startRange === null) {
      startRange = el;
      prevElInRange = el;
    } else if (list[i + 1] === el + 1 && list[i + 2] === el + 2 && startRange !== null) {
      prevElInRange = el;
    } else if (list[i + 1] === el + 1 && prevElInRange === el - 1) {
      prevElInRange = el;
    } else if (startRange !== null && list[i + 1] !== el + 1) {
      let newRange = startRange + '-' + el;
      newList.push(newRange);
      startRange = null;
      prevElInRange = null;
    } else {
      newList.push(el);
    };
  });
  return newList.join(',');
};