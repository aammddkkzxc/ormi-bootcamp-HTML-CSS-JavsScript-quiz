// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Objects
var stu1 = new Student("gfg1", 25);
var stu2 = new Student("gfg2", 42);

// Prototype
Student.prototype.getName = function() { return this.name; }


// Function have property prototype
// Student

// Function call using object
stu1.getName();

// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Objects
var stu1 = new Student("gfg1", 25);
var stu2 = new Student("gfg2", 42);

// Prototype
Student.prototype.getName = function() { return this.name; }


// Function have property prototype
// Student

// function call using object
stu1.getName();

// Access prototype
Student.prototype