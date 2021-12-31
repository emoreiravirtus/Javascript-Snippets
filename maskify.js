const maskify = (cc) => {
  let result = '';
  for(let i = 0; i < cc.length; i++) {
    i < (cc.length - 4) ? result += '#' : result += cc[i];
  }
  return result;
}
