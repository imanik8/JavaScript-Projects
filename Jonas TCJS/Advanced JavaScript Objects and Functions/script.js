// Function COnstructor
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1998, 'teacher');
var himanshu = new Person('Himanshu', 1968, 'Engineer');
var saket = new Person('Saket', 1948, 'Doctor');

john.calculateAge();
himanshu.calculateAge();
saket.calculateAge();

console.log(john.lastName);
console.log(himanshu.lastName);
console.log(saket.lastName);
*/


//Object.create

/*
var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1969;
john.job = 'teacher';

var jane = Object.create(personProto,
    {
        name: {value: 'Jane'},
        yearOfBirth: {value: 1969},
        job: {value: 'designer'}
    });
*/

