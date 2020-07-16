// Your code here
function mapToNegativize(sourceArray) {
  let array = []
  sourceArray.forEach(element => { array.push(-element) })
  return array
}

function mapToNoChange(sourceArray) {
  return sourceArray
}

function mapToDouble(sourceArray) {
  let array = []
  sourceArray.forEach(element => { array.push(element * 2) })
  return array
}

function mapToSquare(sourceArray) {
  let array = []
  sourceArray.forEach(element => { array.push(element ** 2) })
  return array
}

function reduceToTotal(sourceArray, startingPoint=0) {
  let total = startingPoint
  sourceArray.forEach(element => { total += element })
  return total
}

function reduceToAllTrue(sourceArray) {
  let boolean = true
  sourceArray.forEach(element => {
    if (element === false) {
      boolean = false
    }
  })
  return boolean
}

function reduceToAnyTrue(sourceArray) {
  let boolean = false
  sourceArray.forEach(element => {
    if (element === true) {
      boolean = true
    }
  })
  return boolean
}