//classes are made of properties and methods

//preview of Encapsulation
console.log("Classes: Encapsulation")

//base method
function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}


let employee =
{
    //property
    baseSalary: 30000,
    overTime: 10,
    rate: 20,
    //method
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate);
    }
}
console.log(employee.getWage());

let employee2 =
{
    //property
    baseSalary: 40000,
    overTime: 10,
    rate: 20,
    //method
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate);
    }
}
console.log(employee2.getWage())



//OOPjs has 4 pillars

//Encapsulation - less parameters - reduced complexity - increase reusability

//Abstraction - reduces complexity - isolates/reduce impact of changes

//Inheritance - eliminates redundant code

//Polymorphism - many forms - avoids ugly switch/case statements

//////////////////////////  The Basics  //////////////////////////////////////////

// {} braces are called object literal syntax
// object is collection of key value in pairs

// Creating Objects

console.log("------Topic 1----------")
const square = {
    //properties
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    //methods
    draw: function () {
        console.log('draw');
    }
}
console.log(square.draw());














console.log("------Topic 2----------")

// Factories and Constructors

//if you want to create another object
//but if an object has one or more methods, it has behavior, meaning it can do different things
//it causes bugs and errors and longer codes when you try to duplicate it
//this is where you should use factory or constructors

//Factory Function
console.log("Factory Function")
function createCircle(radius) {
    return {
        //property
        radius,
        //method
        draw: function () {
            console.log("draw circle with the radius of " + radius);
        }
    };
}
const circle = createCircle(1);
circle.draw();







//when making properties, you need always to create arguments and pass the parameters to define it or create it

//Constructor Function
console.log("Constructor Function")
function Circle(radius) {
    //console.log('this', this);

    //property
    this.radius = radius;
    //method
    this.draw = function () {
        console.log('draw');
    }
}

//this keyword, points to global object
//but when you put this keyword inside of the object, the object has it's own window or scoping
//meaning it cannot be outside with the other global objects independently


//we use this keyword to reference something inside of the object
//new operator creates empty object {}
//return method automatically happens when you use new operator

const another = new Circle(1);
console.log(another);

//Constructor Property 
console.log("Constructor Property")

console.log(another.constructor); //result: all of the things inside of class another 
console.log(circle.constructor); // result: let circle = new Object()

let x = {}; //let x = new Object()

//types of object literals (method to create object) - the 'new' operator
new String(); // ' ', " " ,` ` 
new Boolean(); //true, false
new Number(); // 1, 2 ,3 ....

//every object has a constructor property and that references the function that was used to create an object

//sample
const myString = new String("Hello World", "asddssadasd"); //creates object string {}
console.log(myString);// doesn't read second parameter


//Functions are Objects
console.log("Functions are Objects");

//purple icons - call , bind , apply are methods
//blue icons are properties

function Circle2(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

Circle2.name; // returns the name of this function
Circle2.length; // returns the number of arguments 

//how to create real circle object using constructor property
const RealCircleObject = new Function('radius',
    `
this.radius = radius;
this.draw = function () {
    console.log('draw');
}
`)

const printIt = new RealCircleObject(1);

console.log(printIt)

console.log("Built-in Methods");

//couple methods that is available in our class function

//we need to pass this argument {} it will reference the object that we pass here

//the first argument here specify the target of this

Circle2.call({}, 1) //this is same as const print = new Cirlce(1);

Circle2.apply({}, [1, 2, 3]) //exactly like call method, but inside passing the arguements explicitly you pass them in array

//if you don't use new operator this inside of the class will point defauly to the window (global variables)

//bind - is used to bind objects when creating something using class/constructors/factors
//bind - is used for to manipulate scoping, so it won't be invoken by the global variable
//sample
this.x = 9; //this stands for make x global variable
const module =
{
    x: 81,
    getX: function () {
        return this.x
    }
}
console.log(module.getX()); //returns 81;

//but
const retrieveX = module.getX;
console.log(retrieveX()); //returns 9 because it got invoked
//in this case use bind
const boundGetX = retrieveX.bind(module);
console.log(boundGetX());



//summarize

//in js functions are Objects
//we can create classes using js Obecjts by this function
//using arguments and parameters we can create object
console.log("==== Practice01 ======")
//practice

//constructor
function Person(traits, age, name) {
    this.trait = traits;
    this.age = age;
    this.name = name;
    //methods
    this.introduce = function () {
        return `Hello my name is ${name}, my age is ${age}, My personality is ${traits}`
    }
}

console.log(new Person('Meh', 19, 'John Doe').introduce())

//factory
function Person2(Height, Weight, Hobby) {
    return {
        //properties
        height: Height,
        weight: Weight,
        hobby: Hobby,
        //methods connected to arguemnets not properties
        intro: function () {
            console.log(Height, Weight, Hobby);
        }
    }
}
const per1 = Person2(23, 23, "Nani")
per1.intro();

//way to use properties

let Person3 = (function () {

    //properties
    const Person3 = function (name) {
        this.name = name;
    }

    //methods
    Person3.greet = function () {
        console.log("Hello")
    }

    //prototype
    Person3.prototype = {
        greet: function () {
            console.log(`Hello my name is ${this.name}`);
        }
    };
    return Person3;
})();

const bob = new Person3("Bob");
console.log(bob.greet());

// understanding new operator

function Foo() { };
Foo.prototype.color = 'default';


fruit1 = new Foo();
console.log(fruit1.color)

fruit1.color = 'red';
console.log(fruit1.color);


console.log("Primatives and Reference Types")

//Primatives and Reference Types

// Value Types \\ 

//Number
//Boolean
//String
//Symbol


// Reference Types \\

//Object
//Function
//Array

let num1 = 10;
let num2 = num1;

num1 = 20;
console.log(num1) // returns 20
console.log(num2) // returns 10

//because they are both independet variable





//Working with Properties

//Private Properties

//Getters or Setters


























