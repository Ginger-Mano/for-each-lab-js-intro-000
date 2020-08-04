function iterativeLog(array) {
array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
  const livingThings = ['cats', 'dogs', 'people', 'plants']
  livingThings.forEach(callback)
    return livingThings
}

function doToArray(array, callback) {
  array.forEach(callback)
}
