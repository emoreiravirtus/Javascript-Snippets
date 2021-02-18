let _ = {
  clamp(number, lower, upper){
    let lowerClampedValue = Math.max(number, lower)
    let clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },
  inRange(number, start, end){
    if(!end){
      end = start
      start = 0
    }
    if(start > end){
      let aux = start
      start = end
      end = aux
    }
    if(number < start || number >= end) return false
    return true
  },
  words(string){
    let words = string.split(' ')
    return words
  },
  pad(string, length){
    if(length <= string.length) return string
    const startPaddingLength = Math.floor((length - string.length) / 2)
    const endPaddingLength = length - string.length - startPaddingLength 
    let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
    return paddedString
  },
  has(object, key){
    let hasValue = object.key ? true : false
    return hasValue
  },
  invert(object){
    let invertedObject = {}
    for(let key in object){
      let originalValue = object[key]
      invertedObject[originalValue] = key
    }
    return invertedObject
  },
  findKey(object, predicate){
    for(let key in object){
      let value = object[key]
      let predicateReturnValue = predicate(value)
      if(predicateReturnValue){
        return key
      }
    }
    return undefined
  }
}


// Do not write or modify code below this line.
module.exports = _;
