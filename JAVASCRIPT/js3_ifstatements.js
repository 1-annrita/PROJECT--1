//IF STATEMEMNTS

var youLikeMeat = true;
var myNum = 10;

if (myNum == 70) {

    document.write("myNum is equal to 10.");
} else {
    document.write("myNum is not equal to 10.");
}


//ELSE IF STATEMEMNTS

var myAge = 40;

if (myAge > 30) {

    document.write("You are over 30!");

} else if (myAge > 20) {

    document.write("You are over 20!");

} else if (myAge > 10) {

    document.write("You are over 10!")

} else {
    document.write("You are not over 10!")
}




//LOGICAL OPERATORS

//&&-AND OPERATOR

var myAge = 26;

if (myAge >= 18 && myAge <= 30) {

    document.write("You can come you cool dude!")

} else {

    document.write("You aint coming!")
}


//||-OR OPERATOR

//A

if (myAge < 18 || myAge > 30) {

    document.write("You aint coming!")

} else {

    document.write("You can come you cool dude!")
}


//B

if (myAge < 18 || myAge > 30 || myAge === 25) {

    document.write("You aint coming!")

} else {

    document.write("You can come you cool dude!")
}




//WHILE LOOPS

var age = 5;
while (age < 10) {
    console.log("Your age is less than 10!")
    age++;
}
document.write("You are now over 10!")




//FOR LOOPS

//A 
for (age = 5; age < 10; age++) {

    document.write("Your age is less than 10!")
}
document.write("You are now over 10!")


//B

var links = document.getElementsByTagName("a");

for (i = 1; i <= links.length; i++) {

    document.write("This is link number " + i);
}
document.write(" All links are now looped.")


//BREAK AND CONTINUE
for (i = 0; i < 10; i++) {

    if (i === 5 || i === 3) {

        continue;
    }

    console.log(i);

    if (i === 7) {

        break;
    }
}

console.log("I have broken out of the loop!")




//LOOPS PRACTICAL EXAMPLE

var links = document.getElementsByTagName("a");
for (i = 0; i < links.length; i++) {

    links[i].className = "link-" + i;
}


//FUNCTIONS

//A

function getAverage(a, b) {

    var average = (a + b) / 2;
    console.log(average);
}
getAverage(7, 12);

//B

function getAverage(a, b) {

    var average = (a + b) / 2;
    console.log(average);
    return average;
}
var myResult = getAverage(7, 8);
console.log("The average is " + myResult)


//VARABLE SCOPE

//GLOBAL AND LOCAL VARIABLE

function getAverage(a, b) {

    var average = (a + b) / 2;
    console.log(average);
    return average;
}
var myResult = getAverage(7, 11);


function logResult() {

    console.log("The average is " + myResult + " inside the function!")
}

logResult();



//NUMBERS

//MATH KEYWORD

console.log(Math.round(7.8))

console.log(Math.floor(4.9))

console.log(Math.ceil(14.1))

console.log(Math.max(4, 9, 20, 100, 34, 108))

console.log(Math.PI)


//NaN(NOT A NUMBER)

//A

var a = "apple";
var b = 5;

if (isNaN(a)) {

    console.log("That aint even a number, thickie!")

} else {

    console.log("Meaning of life is " + (a * b))
}


//B

var a = 6;
var b = 5;

if (isNaN(a)) {

    console.log("That aint even a number, thickie!")

} else {

    console.log("Meaning of life is " + (a * b))
}




//STRINGS


//INITIALIZE A STRING

var myString = 'I am a"fun" string.';
console.log(myString);


//ESCAPE CHARACTERS WITHIN A STRING

var mystring = 'I\'m a "fun ice" string.';
console.log(mystring);
console.log(mystring.length);
console.log(mystring.toUpperCase());
console.log(mystring.toLowerCase());
console.log(mystring.indexOf("ice"));

if (mystring.indexOf("ice") === -1) {

    console.log("The word ice is not in the string!");

} else {

    console.log("The word ice starts at position " + myString.indexOf("ice"));
}

var string1 = 'abc';
var string2 = 'ABC';

console.log(string1 === string2);
console.log(string1.toLowerCase === string2.toLowerCase);


var string1 = 'abc';
var string2 = 'Bcd';

console.log(string1 < string2);

var str = "Hello, world";



//CREATING A NEW OBJECT
var myArray = new Array();

myArray[0] = 8;
myArray[1] = "hello";

console.log(myArray);


//CREATING A NEW OBJECT
//ASSIGNING A NEW PROPERTY
var myCar = new Object();

myCar.maxSpeed = 50;
myCar.driver = "Rita";

console.log(myCar);


//ASSIGNING METHODS/FUNCTIONS/BEHAVIOURS
myCar.drive = function () { console.log("now driving"); };

myCar.drive();


//SHORTHAND NOTATION FOR AN OBJECT-->PROPERTIES & EMPTY FUNCTION
var myCar2 = { maxSpeed: 40, driver: "AnnRita", drive: function () { console.log("now driving again"); } };

console.log(myCar2.maxSpeed);
myCar2.drive();


//LOADED FUNCTION

var myCar3 = {
    maxSpeed: 70,
    driver: "Brian",
    drive: function (time, speed) {
        console.log(time * speed);
    }
};

console.log(myCar3.maxSpeed);
myCar3.drive(3, 50)



//'THIS' KEYWORD
console.log(this);

var myCar4 = {
    maxSpeed: 80,
    driver: "Destiny",
    drive: function (speed, time) {
        console.log(speed * time);
    }

};

console.log(myCar4.maxSpeed);






