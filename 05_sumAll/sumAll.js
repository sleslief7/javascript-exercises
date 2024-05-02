const sumAll = function(start, end) {
    if(start < 0 || end < 0) {
        return 'ERROR';
    }
    if(typeof(start) !== 'number' || typeof(end) !== 'number'){
        return 'ERROR';
    }
    let sum = 0;
    let bigger = Math.max(start, end);
    let smaller = Math.min(start, end);
    for(let i = smaller; i <= bigger; i++){
        sum += i;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
