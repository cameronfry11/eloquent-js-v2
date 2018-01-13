/*
    Write a function countBs that takes a string
    as its only argument and returns a number that indicates
    how many uppercase "B" characters are in the string

    Write a function called countChar that behaves like countB's
    It takes a second argument that indicates the char
    that is to be counted

    Rewrite countB's to make use of this new function
 */

function countBs(text, letter) {
    var count = 0;
    for (i=0; i < text.length; i++) {
        if (text.charAt(i) === letter) {
            count+=1;
        }
    }
    return count;
}

console.log(countBs("BBalskfdfja;sdkfjaskfldjBBad;sflkjasdflkjB", "f"));
