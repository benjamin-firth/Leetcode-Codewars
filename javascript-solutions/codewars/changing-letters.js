const swap = (str) => str.split('').map(el => ['a','e','i','o','u'].includes(el) ? el.toUpperCase() : el).join('');