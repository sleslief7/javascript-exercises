const removeFromArray = function(arr, ...params) {
    return arr.filter(e => !params.includes(e));
};
// Do not edit below this line
module.exports = removeFromArray;
