const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i < 10; i++) {
    if (num % i === 0 && num !== i) return false;
  };
  for (let i = 3; i <= Math.sqrt(num); i+=2) {
    if (num % i === 0) return false;
  };
  return true;
};