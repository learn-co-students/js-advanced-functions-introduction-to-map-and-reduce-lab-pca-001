// Your code here

function mapToNegativize(sourceArray) {
  let negArray = []
  for (let index = 0; index < sourceArray.length; index ++) {
    negArray.push(-1 * sourceArray[index])
  }
  return negArray
}

function mapToNoChange(sourceArray) {
  let ogArray = []
  for (let index = 0; index < sourceArray.length; index ++) {
    ogArray.push(sourceArray[index])
  }
  return ogArray
}

function mapToDouble(sourceArray) {
  let multArray = []
  for (let index = 0; index < sourceArray.length; index ++) {
    multArray.push(2 * sourceArray[index])
  }
  return multArray
}

function mapToSquare(sourceArray) {
  let squareArray = []
  for (let index = 0; index < sourceArray.length; index ++) {
    squareArray.push(sourceArray[index] * sourceArray[index])
  }
  return squareArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let index = 0; index < sourceArray.length; index++ ) {
    total = total + sourceArray[index]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  for (let index = 0; index < sourceArray.length; index++ ) {
    if (!sourceArray[index]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let index = 0; index < sourceArray.length; index++ ) {
    if (sourceArray[index]) return true
  }
  return false
}
