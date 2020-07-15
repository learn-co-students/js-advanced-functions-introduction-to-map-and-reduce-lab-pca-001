// Your code here
function mapToNegativize(sourceArray) {
  const newArray = []
  for(const i of sourceArray) {
    newArray.push(-i)
  }
  return newArray
}

function mapToNoChange(sourceArray) {
  const newArray = []
  for(const i of sourceArray) {
    newArray.push(i)
  }
  return newArray
}

function mapToDouble(sourceArray) {
  const newArray = []
  for(const i of sourceArray) {
    newArray.push(i*2)
  }
  return newArray
}

function mapToSquare(sourceArray) {
  const newArray = []
  for(const i of sourceArray) {
    newArray.push(i**2)
  }
  return newArray
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++ ) {
    total = total + sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  let all_true = true
  for(const elem of sourceArray) {
    if(!elem) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for(const elem of sourceArray) {
    if(elem) {
      return true
    }
  }
  return false
}