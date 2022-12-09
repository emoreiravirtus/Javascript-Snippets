function countSheeps(arrayOfSheep) {
  let presentSheeps = 0;
  
  arrayOfSheep.map(sheep => sheep && (presentSheeps += 1))
  
  return presentSheeps;
}

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
