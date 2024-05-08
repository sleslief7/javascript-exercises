const findTheOldest = arr => {
    let oldestToYoungest = arr.sort((a, b) => {
        return getPersonAge(b) - getPersonAge(a);
    });
    return oldestToYoungest[0];
}

const getPersonAge = person => {
    if("yearOfDeath" in person) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
