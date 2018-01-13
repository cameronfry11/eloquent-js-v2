/*
    Nice way to compute the sum of a range of numbers:
        console.log(sum(range(1,10)));

    Write a range function that takes two arguments, start and end
    returns an array containing all the numbers from start up to end

    Write a sum function that takes an arrya of numbers and returns
    the sum of these numbers

    As a bonus, modify range function to take an optional third argument that
    indicates the step value used to build up the array
    If no step is given, the aray elements go up by increments of one

    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
    Make sure it also works with a negative step values so that ranget(5, 2, -1)
    produces [5, 4, 3, 2]
 */

function range(start, end) {
    var array = [];
    for (i=start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

console.log(range(3,9));

function sum(numbers) {
    var result = 0;
    for (i=0; i < numbers.length; i++){
        result+=numbers[i];
    }
    return result;
}

console.log(sum(range(1,10)));

function rangeWithStep(start, end, step) {
    var array = [];
    if (end > start) {
        for (i=start; i <= end; i+=step) {
            array.push(i);
        }
    } else {
        for (i=start; i >= end; i+=step) {
            array.push(i);
        }
    }
    return array;
}

console.log(rangeWithStep(5,2,-1));

