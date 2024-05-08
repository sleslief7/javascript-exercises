const fibonacci = position => {
    position = Number(position);
    if(position < 0 || isNaN(position)) return 'OOPS';
    if(position === 0) return 0;
    if(position === 1 || position === 2) return 1;


    let beforeBefore = 1;
    let before = 1;
    let current;
    for(let i = 2; i < position; i++) {
        current = beforeBefore + before;
        beforeBefore = before;
        before = current;
    }
    return current;
}

console.log(fibonacci(5))

// Do not edit below this line
module.exports = fibonacci;
