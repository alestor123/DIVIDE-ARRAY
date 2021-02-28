module.exports = arr => {
var half = Math.ceil(arr.length / 2);
return [arr.splice(0, half), arr.splice(-half)]
}