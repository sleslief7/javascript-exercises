const repeatString = function(string, num) {
    let repeatedString = '';
    for(let i = 1; i <= num; i++) {
        if(num === 0){
            repeatedString = '';
        } else if(num < 0) {
            repeatedString = 'ERROR';
        } else {
            repeatedString += string;
        }
        
    }
    return repeatedString;
};
// Do not edit below this line
module.exports = repeatString;
