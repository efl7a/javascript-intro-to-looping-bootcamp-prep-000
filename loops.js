function forLoop(array) {
  for (var i = 1; i <= 25; i++) {
    array.push(`I am ${i} strange loops.`)
  }
  return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log (n)
    n--
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length >= 0 && maybeTrue()){
      array.pop()
  }
  return array
}
