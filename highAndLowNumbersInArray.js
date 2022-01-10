const highAndLow = numbers => {
  let numbersArray = numbers.split(' ');
  
  numbersArray = numbersArray.map(number => parseInt(number));
  
  return `${Math.max.apply(Math, numbersArray)} ${Math.min.apply(Math, numbersArray)}`;
}
