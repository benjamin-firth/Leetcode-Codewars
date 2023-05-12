Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((int) => !values_list.includes(int));
};
