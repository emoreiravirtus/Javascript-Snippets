//not built-in method
const reverseArray = array => {
  let newArray = []
  for(let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i])
  }
  return newArray
}

//build-in method
array.reverse()

//both produce same result.
