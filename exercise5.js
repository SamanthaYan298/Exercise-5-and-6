// 5-String Formatting;
// 5-1-0 Curly Brace / Backticks / Template Literals;
var x = 12
var sentence = `There were ${x} candies in the jar.`;
console.log(sentence);

// 5-1-2
var age = 45;
var sentence = `The adult was ${age} years old.`
console.log(sentence);

// 5-1-3
var firstName = "Mark";
var lastName = "Jameson";
var job = "Graphic Designer";
var sentence = `${firstName} ${lastName} was hired as ${job}.`;
console.log(sentence);

// 5-1-4
var petName = "Sandy";
var age = 2;
var petType = "dog";
var sentence = `${petName} is a ${petType}. She is ${age} years old.`;
console.log(sentence);

// 5-1-5
var text = `It's sunny outside today.`;
console.log(text);

// 5-1-6
var text = `I don't have a pet dog.`;
console.log(text);

// 5-1-7
var number = 3;
var text = `What are the ${number} Good Design Goals?`;
console.log(text)

// 5-1-8
var text = `The title of the book is called "Design Patterns".`
console.log(text);

// 5-1-9
var symbol = "\\"; //"\" is escape character;
var text = `The symbol of the backslash is ${symbol}.`;
console.log(text);

// 5-2-0 Concatenation;
// 5-2-1;
var x = 12;
var sentence = "There were + x + candies in the jar."
console.log(sentence);

// 5-2-2
var age = 45;
var sentence = "The adult was + age + years old.";
console.log(sentence);

// 5-2-3
var firstName = "Mark";
var lastName = "Jameson";
var job = "graphic designer";
var sentence = firstName + " " + lastName + " " + "was hired as a" + job + ".";
console.log(sentence);

// 5-2-4
var petName = "Sandy";
var age = 2;
var petType = "dog";
var sentence = petName + " is a " + petType + "." + " She is " + age + " years old."
console.log(sentence);

// 5-3-0 Double quotes;
// 5-3-1;
var text = "It's sunny outside today.";
console.log(text);

// 5-3-2
var text = "I don't have a pet dog.";
console.log(text);

// 5-3-3
var text = "What are the 3 Good Goals?";
console.log(text);

// 5-3-4
var text = "The title of the book is called \"Design Patterns.\""; // cannot double quotes for design patterns;
console.log(text);

// 5-3-5
var text = "The symbol of the backslash is \\."; // no display \ after running console.log;
console.log(text);

// 5-4-0 single quotes;
// 5-4-1;
var text = 'It\'s sunny outside today.'; //canont write "it's";
console.log(text);

// 5-4-2
var text = 'I don\'t have a pet dog.';
console.log(text);

// 5-4-3
var text = 'What are the 3 Good Design Goals?';
console.log(text);

// 5-4-4
var text = 'The title of the book is called "Design Patterns."';
console.log(text);

// 5-4-5
var text = 'The symbol of the backslash is \\.'; // no display "\" again;
console.log(text);

// 5-5-0 Format Specifiers;
// 5-5-1 Format the value as a string;
var name = "Tom";
console.log("%s will be buying a car today.", name);

// 5-5-2;
var place = "Vancouver";
console.log("%s is an expensive place.", place);

// 5-5-3 Format the value as an integer;
var year = 1975;
console.log("Microsoft started in %i.", year);

// 5-5-4;
var age = 35;
console.log("John is %i years old.", age);

// 5-5-5 Format the value as a floating point;
var cups = 3.5;
console.log("I drank %f cups of water.", cups);

// 5-5-6;
var PI = 3.14;
console.log("The value of PI is %f.", PI);

// 5-5-7 Format the sentence using s string and integer;
var name = "Sarah";
var age = 50;
console.log("%s is %i years old.", name, age);

// 5-5-8;
var name = "John";
var age = 45;
console.log("%s is %i years old.", name, age);

// 6-Arithmetics;
// 6-1-0 Addition;
// 6-1-1；
var x = 2;
var y = 2;
var z = x + y;
console.log(z);

// 6-1-2；
var x = 4;
var y = 10;
var z = x + y;
console.log(z);

// 6-1-3;
var apples = 20;
var oranges = 20;
var fruits = apples + oranges;
console.log(fruits);

// 6-1-4;
var laptops = 5;
var tablets = 2;
var electronics = laptops + tablets;
console.log(electronics);

// 6-1-5;
var chips = 10;
var cookies = 10;
var snacks = chips + cookies;
console.log(snacks);

// 6-2-0 Subtraction;
// 6-2-1;
var x = 3;
var y = 1;
var z = x - y;
console.log(z);

// 6-2-2;
var a =10;
var b = 20;
var c = b - a;
console.log(c);

// 6-2-3;
var start = 10;
var eat = 3;
var newTotal = start - eat;
console.log(newTotal);

// 6-2-4;
var legoStart = 100;
var legoThrown = 30;
var newLegoTotal = legoStart - legoThrown;
console.log(newLegoTotal);

// 6-2-5;
var intialLaptops = 15;
var soldLaptops = 7;
var available = intialLaptops - soldLaptops;
console.log(available);

// 6-3-0 Multiplication;
// 6-3-1;
var x = 4;
var y = 5;
var z = x * y;
console.log(z);

// 6-3-2;
var rock = 10;
var paper = 20;
var scissors = rock * paper;
console.log(scissors);

// 6-3-3;
var subtotal = 30;
var adjustment = 12;
var total = subtotal * adjustment;
console.log(total);

// 6-3-4;
var pens = 7;
var erasers = 7;
var total = pens * erasers;
console.log(total);

// 6-3-5;
var flowers = 4;
var grass = 3;
var gardeningItems = flowers * grass;
console.log(gardeningItems);

// 6-4-0 Division;
// 6-4-1;
var pie = 10;
var dividedNumber = 2;
var total = pie / dividedNumber;
console.log(total);

// 6-4-2;
var soups = 30;
var sold = 3;
var newTotal = soups / sold;
console.log(newTotal);

// 6-4-3;
var papers = 100;
var dissolved = 10;
var newTotal = papers / dissolved;
console.log(newTotal);

// 6-4-4;
var j = 40;
var k = 40;
var m = j / k;
console.log(m);

// 6-4-5;
var p = 20;
var q = 10;
var r = p / q;
console.log(r);

// 6-5-0 Equations;
// 6-5-1;
var x = 5;
var y = 2 * x;
console.log(y); // 10；

// 6-5-2;
var x = 3;
var y = (5 * x) / 2;
console.log(y); // 7.5；

// 6-5-3；
var x = 2;
var y = (3 * x) + 1;
console.log(y); // 7;

// 6-5-4;
var PI = 3.14;
var area = PI * (5 ** 2);
console.log(area); // 78.5;

// 6-5-5;
var distanceTravelled = 25;
var timeTaken = 5;
var speed = distanceTravelled / timeTaken;
console.log(speed + "m/s"); // 5;


