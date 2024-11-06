

// 1. Check Age
var age = 13;
if (age >= 13 && age <= 17) {
    console.log(age + " is young");
} else if (age >= 18 && age <= 64) {
    console.log(age + " is adult");
} else if (age >= 65) {
    console.log(age + " is 0ld");
} else {
}

// 2. Odd or Even
var num = 5;
if (num % 2 == 0) {
    console.log(num + " is even");
} else {
    console.log(num + " is odd");
}

// 3. Check Temperature
var temp = 22;
if (temp < 0) {
    console.log(temp + " is freezing");
} else if (temp >= 0 && temp <= 30) {
    console.log(temp + " is cold");
} else {
    console.log(temp + " is hot");
}

// 4. Grade checker
var grade = 52;
if (grade <= 50) {
    console.log(grade + " is failed");
} else {
    console.log(grade + " is pass");
}

// 5. Driving Eligibility
var age2 = 18;
if (age2 >= 18) {
    console.log(age2 + " is eligible");
} else {
    console.log(age2 + " is not eligible");
}

// 6. Positive, Negative, or Zero
var num6 = -5;
if (num6 < 0) {
    console.log(num6 + " is negative");
} else if (num6 > 0) {
    console.log(num6 + " is positive");
} else {
    console.log(num6 + " is zero");
}

// 7. Multiple of Five
var num7 = -15;
if (num7 % 5 == 0) {
    console.log(num7 + " is multiple of 5");
} else {
    console.log(num7 + " is not a multiple of 5");
}

// 8. Vowel checker
var string = "u";
if (
    string == "a" ||
    string == "e" ||
    string == "i" ||
    string == "o" ||
    string == "u"
) {
    console.log(string + " is a vowel");
}

// 9.Day of the week
var num9 = 3;
if (num9 == 1) {
    console.log("Monday");
} else if (num9 == 2) {
    console.log("Tuesday");
} else if (num9 == 3) {
    console.log("Wednesday");
} else if (num9 == 4) {
    console.log("Thursday");
} else if (num9 == 5) {
    console.log("Friday");
} else if (num9 == 6) {
    console.log("Saturday");
} else if (num9 == 7) {
    console.log("Sunday");
} else {
}

// 10. Number Range
var num10 = -10;
if (num10 >= 1 && num10 <= 100) {
    console.log(num10 + " is within range");
} else {
    console.log(num10 + " is out of range");
}

// 11. Leap Year Checker
var year = 2023;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

// 12. Divisible by 3 and 7
var num12 = 21;
if (num12 % 3 == 0 && num12 % 7 == 0) {
    console.log(num12 + " is divisible by 3 and 7");
} else {
    console.log(num12 + " is not divisible by 3 and 7");
}

// 13. Largest of Three Numbers
var num13 = -5;
var num14 = -10;
var num15 = -15;
if (num13 > num14 && num13 > num15) {
    console.log(num13 + " is the largest");
} else if (num14 > num13 && num14 > num15) {
    console.log(num14 + " is the largest");
} else if (num15 > num13 && num15 > num14) {
    console.log(num15 + " is the largest");
} else {
    console.log("All numbers are equal");
}

// 14. Factorial Calculator
var num14 = 5;
var factorial = 1;
for (var i = 1; i <= num14; i++) {
    factorial *= i;
}

console.log(factorial);

// 15. Palindrome Checker
var string15 = "racecar";
var reversed = string15.split("").reverse().join("");
if (string15 == reversed) {
    console.log(string15 + " is a palindrome");
} else {
    console.log(string15 + " is not a palindrome");
}

// 16. Fibonacci Sequence
var num16 = 10;
var fibonacci = [0, 1];
for (var i = 2; i < num16; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);

// 17. Armstrong Number
var num17 = 153;
var sum = 0;
var temp = num17;
while (temp > 0) {
    var digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}
if (num17 == sum) {
    console.log(num17 + " is an Armstrong number");
} else {
    console.log(num17 + " is not an Armstrong number");
}

// 18. Sum of Digits
var num18 = 12345;
var sum = 0;
while (num18 > 0) {
    var digit = num18 % 10;
    sum += digit;
    num18 = Math.floor(num18 / 10);
}
console.log(sum);

// 19. Prime Number Checker
var num19 = 13;
var isPrime = true;
if (num19 <= 1) {
    isPrime = false;
} else {
    for (var i = 2; i <= Math.sqrt(num19); i++) {
        if (num19 % i == 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num19 + " is a prime number");
} else {
    console.log(num19 + " is not a prime number");
}

// 20. Swap Two Variables
var num20 = 5;
var num21 = 10;
console.log(num20 + " " + num21);
var temp = num20;
num20 = num21;
num21 = temp;
console.log(num20 + " " + num21);

// 21. Square Calculator
var num21 = 5;
var square = num21 * num21;
console.log(square);

// 22. Odd Numbers Sum
var num22 = 10;
var sum = 0;
for (var i = 1; i <= num22; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}

console.log(sum);

// 23. Simple Interest Calculator
var principal = 1000;
var rate = 5;
var time = 2;
var simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest);

// 24. Area of a Circle
var radius = 5;
var area = Math.PI * radius * radius;
console.log(area);

// 25. Reverse a Number
var num25 = 12345;
var reversed = 0;
while (num25 > 0) {
    var digit = num25 % 10;
    reversed = reversed * 10 + digit;
    num25 = Math.floor(num25 / 10);
}
console.log(reversed);

// 26. Character Case Check
var char26 = "A";
if (char26 >= "A" && char26 <= "Z") {
    console.log(char26 + " is uppercase");
} else if (char26 >= "a" && char26 <= "z") {
    console.log(char26 + " is lowercase");
} else {
    console.log(char26 + " is not a character");
}

// 27. Sum of Even Numbers
var num27 = 10;
var sum = 0;
for (var i = 1; i <= num27; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);

// 28. Perfect Number Checker
var num28 = 28;
var sum = 0;
for (var i = 1; i < num28; i++) {
    if (num28 % i == 0) {
        sum += i;
    }
}

if (sum == num28) {
    console.log(num28 + " is a perfect number");
} else {
    console.log(num28 + " is not a perfect number");
}

// 29. Square Root Calculator
var num29 = 25;
var squareRoot = Math.sqrt(num29);
console.log(squareRoot);

// 30. Number of Vowels in a String
var string30 = "Hello, World!";
var vowels = "aeiouAEIOU";
var count = 0;
for (var i = 0; i < string30.length; i++) {
    if (vowels.indexOf(string30[i]) != -1) {
        count++;
    }
}
console.log(count);


