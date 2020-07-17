// Remember, all map methods return a new Array.

function mapToNegativize(sourceArray) {
  let result = []
  for(const element of sourceArray) {
    result.push(-element)
  }
  return result
}

function mapToNoChange(sourceArray) {
  let result = []
  for(const element of sourceArray) {
    result.push(element)
  }
  return result
}

function mapToDouble(sourceArray) {
  let result = []
  for(const element of sourceArray) {
    result.push(element * 2)
  }
  return result
}

function mapToSquare(sourceArray) {
  let result = []
  for(const element of sourceArray) {
    result.push(element ** 2)
  }
  return result
}

// Remember, all reduce methods return a value.

function reduceToTotal(sourceArray, startingPoint = 0) {
  let result = startingPoint
  for(const element of sourceArray) {
    result = result + element
  }
  return result
}

function reduceToAllTrue(sourceArray) {
  let all_true = true
  for(const element of sourceArray) {
    if(!element) { // if any element is false,
      return false // set all true to false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for(const element of sourceArray) {
    if(element) {
      return true
    }
  }
  return false
}