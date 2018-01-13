
function isEven(number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number -2);
    }
}

function isEvenIncludingNegativeArguments(number) {
    number = Math.abs(number);
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number -2);
    }
}

console.log(isEven(75));
console.log(isEvenIncludingNegativeArguments(77));
