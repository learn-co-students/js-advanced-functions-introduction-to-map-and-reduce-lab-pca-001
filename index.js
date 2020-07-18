function mapToNegativize(jawns) {
  const freshArray = []
  for (let i of jawns) {
    freshArray.push(-i)
  }
  return freshArray
}

function mapToNoChange(jawns) {
  const freshArray = []
  for (let i of jawns) {
    freshArray.push(i)
  }
  return freshArray
}

function mapToDouble(jawns) {
  const doubleFreshArray = []
  for (let i of jawns) {
    doubleFreshArray.push(i * 2)
  }
  return doubleFreshArray
}

function mapToSquare(jawns) {
  const kidsASquare = []
  for (let i of jawns) {
    kidsASquare.push(i * i)
  }
  return kidsASquare
}

function reduceToTotal(jawns, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < jawns.length; i++ ) {
    total = total + jawns[i]
  }
  return total
}

function reduceToAllTrue(jawns) {
  for (let i = 0; i < jawns.length; i++ ) {
    if (!jawns[i]) return false
  }
  return true
}

function reduceToAnyTrue(jawns) {
  for (let i = 0; i < jawns.length; i++ ) {
    if (jawns[i]) return true
  }
  return false
}