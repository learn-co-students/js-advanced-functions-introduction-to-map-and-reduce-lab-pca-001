// Your code here
function mapToNegativize(values) {
  const arry = []
  for (let i of values) {
    arry.push(-i)
  }
  return arry
}

function mapToNoChange(values) {
  const origArray = []
  for (let i of values) {
    origArray.push(i)
  }
  return origArray
}

function mapToDouble(values) {
  const dbleArray = []
  for (let i of values) {
    dbleArray.push(i * 2)
  }
  return dbleArray
}

function mapToSquare(values) {
  const dbleArray = []
  for (let i of values) {
    dbleArray.push(i * i)
  }
  return dbleArray
}


function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++ ) {
    total = total + sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (!sourceArray[i]) return false
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++ ) {
    if (sourceArray[i]) return true
  }
  return false
}

