const repeatString = function(string, num) {
    let repeatedString = '';
    if(num < 0) {
        return repeatedString += 'ERROR';
    }
    for(let i = 1; i <= num; i++) {
        if(num === 0){
            repeatedString = '';
        } else {
            repeatedString += string;
        }
    }
    return repeatedString;
};
// Do not edit below this line
module.exports = repeatString;
