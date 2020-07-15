function mapToNegativize(sourceArray) {
  let result = []
  for(const elem of sourceArray) {
    result.push(-elem)
  }
  return result
}
function mapToNoChange(sourceArray) {
  let result = []
  for(const elem of sourceArray) {
    result.push(elem)
  }
  return result
}
function mapToDouble(sourceArray) {
  let result = []
  for(const elem of sourceArray) {
    result.push(elem * 2)
  }
  return result
}
function mapToSquare(sourceArray) {
  let result = []
  for(const elem of sourceArray) {
    result.push(elem * elem)
  }
  return result
}
// Remember, all map methods return a new Array.

// reduce-like
function reduceToTotal(sourceArray, startingPoint = 0) {
  let result = startingPoint
  for(const elem of sourceArray) {
    result = result + elem
  }
  return result
}

function reduceToAllTrue(sourceArray) {
  let all_true = true
  for(const elem of sourceArray) {
    // if any elem is false, set all true to false
    all_true = elem ? all_true : false
  }
  return all_true
}

function reduceToAnyTrue(sourceArray) {
  let any_true = false
  for(const elem of sourceArray) {
    // if any elem is true, set anytrue to true
    any_true = elem ? true : any_true
  }
  return any_true
}