function add (a , b) {
  return a + b;
}

function substract (a , b) {
  return a - b;
}

// common js logics to export logic where we'll need
// this module export two functions in the old way commonjs
module.exports = {
  add, 
  substract,
}