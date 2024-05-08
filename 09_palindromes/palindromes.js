const palindromes = str => {
    let regex = /[^a-z\d]+/gi;
    str = str.toLowerCase().replace(regex, '')
    let reverse = [...str].reverse().join('');
    return reverse === str;
}
// Do not edit below this line
module.exports = palindromes;
