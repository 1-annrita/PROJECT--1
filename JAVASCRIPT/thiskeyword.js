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
myCar4.drive(40, 3);



var myCar5 = {
    maxSpeed: 100,
    driver: "Chris",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    test: function () {
        console.log(this);
    }

};

myCar5.test();
console.log(myCar5.maxSpeed);
myCar5.drive(60, 5);



var myCar6 = {
    maxSpeed: 108,
    driver: "Joy",
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDriver: function () {
        console.log("driver name is " + this.driver);
    }

};

myCar6.logDriver();



//CONSTRUCTOR FUNCTION


var Car = function (maxSpeed, driver) {

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function () {
        console.log("Driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Ninja");
var myCar2 = new Car(40, "Humpty");
var myCar3 = new Car(10, "Shaun");
var myCar4 = new Car(90, "James");

myCar.drive(30, 5);
myCar3.logDriver();


//THE DATE OBJECT

var myDate = new Date();
console.log(myDate)


var myPastDate = new Date(1545, 11, 2, 10, 30, 45);
var myFutureDate = new Date(2515, 0, 31, 12, 45, 12);
console.log(myPastDate);
console.log(myFutureDate);


var birthday = new Date(1999, 6, 23, 14, 20, 33);
var birthday2 = new Date(1999, 6, 23, 14, 20, 33);

console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday == birthday2) {

    console.log("Birtdays are equal")

} else {

    console.log("Birthdays are")
} 


if (birthday.getTime() == birthday2.getTime()) {

    console.log("Birtdays are equal")

} else {

    console.log("Birthdays are")
}
