/*
    Console.log the numbers from 1 to 100.
    For numbers divisible by 3 print "Fizz" instead of the number
    For numbers divisible by 5 print "Buzz" instead

    After this works:
    Program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
 */

// 1. Log the number 1
console.log(1);

// 2. Log the numbers from 1 to 100
for (number = 1; number <=100; number++) console.log(number);

// 3. Use modulus 3 to print "Fizz"
console.log(3%3 ? "Number" : "Fizz");

// 4. Use ternary in loop
for (number = 1; number <=100; number++)
    console.log(number%3 ? number : "Fizz");

// 5. Use ternary to print buzz when divisible by 5
for (number = 1; number <=100; number++)
    console.log(number%5 ? number%3 ? number: "Fizz" : "Buzz");

// 6. Print "FizzBuzz" when divisible by 3 and 5
for (number = 1; number <=100; number++)
    console.log(number%5 ? number%3 ? number: "Fizz" : number%3 ? "Buzz" : "FizzBuzz");
