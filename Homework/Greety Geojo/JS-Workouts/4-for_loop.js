// 1. Sum of first n natural numbers
var n1 = 10;
var sum1 = 0;
for (var i = 2; i <= n1; i += 1) {
  sum1 = sum1 + i;
}
console.log("1)  " + sum1);

// 2. Sum of first n odd numbers
var n2 = 10;
var sum2 = 0;
for (var i = 1; i <= n2; i += 2) {
  sum2 += i;
}
console.log("\n2)  " + sum2);

// 3. Sum of first n even numbers
var n3 = 10;
var sum3 = 0;
for (var i = 2; i <= n3; i += 2) {
  sum3 += i;
}
console.log("\n3)  " + sum3);

// 4. Factorial of a number
var fact = 1;
var n4 = 5;

for (var i = 1; i <= n4; i++) {
  fact = fact * i;
}
console.log("\n4)  " + fact);

// 5. Sum of squares of first n natural numbers
var sum5 = 0;
var n5 = 5;
for (var i = 1; i <= n5; i++) {
  sum5 += i * i;
}
console.log("\n5)  " + sum5);

// 6. Sum of cubes of first n natural numbers
var sum6 = 0;
var n6 = 5;
for (var i = 1; i <= n6; i++) {
  sum6 += i * i * i;
}
console.log("\n6)  " + sum6);

// 7. Print first n multiples of a given number
var n7 = 5;
var x7 = /* Multiples of */ 3;
var multiples = "";
for (var i = 1; i <= n7; i++) {
  var temp = x7 * i;
  multiples = multiples + String(temp) + ", ";
}
console.log("\n7)  " + multiples);

// 8. Calculate the product of the first n natural numbers
var n8 = 5;
var product = 1;
for (var i = 1; i <= n8; i++) {
  product *= i;
}
console.log("\n8)  " + product);

// 9. Print all even numbers between 1 and n
var n9 = 10;
var evenNumbers = "";
for (var i = 1; i <= n9; i++) {
  if (i % 2 == 0) {
    evenNumbers = evenNumbers + String(i) + ", ";
  }
}
console.log("\n9)  " + evenNumbers);

// 10. Print all odd numbers between 1
var n10 = 5;
var oddNumbers = "";
for (let i = 1; i <= n10; i++) {
  if (i % 2 != 0) {
    oddNumbers = oddNumbers + String(i) + ", ";
  }
}
console.log("\n10)  " + oddNumbers);

// 11. Count the number of digits in a given integer
var n11 = 528;
var count = 0;
while (n11 != 0) {
  n11 = Math.floor(n11 / 10);
  count++;
}
console.log("\n11)  " + count);

// 12. Calculate the sum of the digits of a given number
var n12 = 528;
var sum12 = 0;
n12 = String(n12);
// while (n12 != 0){
//   sum12 += n12 % 10;
//   n12 = Math.floor(n12 / 10);
// }

for (var i = 0; i <= n12.length - 1; i++) {
  sum12 = sum12 + Number(n12[i]);
}
console.log("\n12)  " + sum12);

// 13. Reverse a given integer
var n13 = 528;
var revnum = "";
n13 = String(n13);
// while (n13 != 0){
//   revnum = revnum * 10 + n13 % 10;
//   n13 = Math.floor(n13 / 10);
// }

for (var i = n13.length - 1; i >= 0; i--) {
  revnum = revnum + n13[i];
}
console.log("\n13)  " + revnum);

// 14. Check if a number is prime
var n14 = 5;
var isPrime = true;
for (var i = 2; i < n14; i++) {
  if (n14 % i == 0) {
    isPrime = false;
    break;
  }
}
console.log("\n14)  " + isPrime);

// 15. Print the multiplication table for a given number
var n15 = 3;
var x15 = 5;
var table = "";
for (var i = 1; i <= x15; i++) {
  table = table + i + " * " + n15 + " = " + String(n15 * i) + "\n    ";
}
console.log("\n15) " + table);

// 16. Find the sum of all numbers from 1 to n that are divisible by 3
var n16 = 10;
var sum16 = 0;
for (var i = 1; i <= n16; i++) {
  if (i % 3 == 0) {
    sum16 += i;
  }
}
console.log("\n16)  " + sum16);

// 17. Calculate the sum of all numbers from 1 to n that are divisible by both 3 and 5
var n17 = 20;
var sum17 = 0;
for (var i = 1; i <= n17; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    sum17 += i;
  }
}
console.log("\n17)  " + sum17);

// 18. Print numbers from 1 to n and mark each number as even or odd
var n18 = 10;
var evenOdd = "";
for (var i = 1; i <= n18; i++) {
  if (i % 2 == 0) {
    evenOdd = evenOdd + String(i) + " is even\n    ";
  } else {
    evenOdd = evenOdd + String(i) + " is odd\n    ";
  }
}
console.log("\n18)  " + evenOdd);

// 19. Calculate the sum of the factorials of each number from 1 to n
var n19 = 5;
var sum19 = 0;
for (var i = 1; i <= n19; i++) {
  var fact19 = 1;
  for (var j = 1; j <= i; j++) {
    fact19 *= j;
  }
  sum19 += fact19;
}
console.log("\n19)  " + sum19);

// 20. Check if a given number is a perfect square by iterating up to n
var n20 = 25;
var isSquare = false;
for (var i = 1; i <= n20; i++) {
  if (i * i == n20) {
    isSquare = true;
    break;
  }
}
console.log("\n20)  " + isSquare);
