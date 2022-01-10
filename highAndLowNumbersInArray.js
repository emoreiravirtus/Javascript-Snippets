const highAndLow = numbers => {
  numbers = numbers.split(' ').map(Number);
  return `${Math.max.apply(Math, numbersArray)} ${Math.min.apply(Math, numbersArray)}`;
}
