
const path = require('path')

console.log('hi from ', path.basename(__filename))

const sqrt = Math.sqrt;
const square = function (x) {
    return x * x;
}
exports.diag = function (x, y) {
    return sqrt(square(x) + square(y));
}