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

//Primitives Vs Objects
/*
 var a = 23;
 var b = a;
 a = 43;
 console.log(a);
 console.log(b);

 //Object
 var obj1 = {
     name: 'John',
     age: 26
 };
 var obj2 = obj1;
 obj1.age = 30;
 console.log(obj1.age);
 console.log(obj2.age);

 //Function
 var age = 27;
 var obj = {
     name: 'Jonas',
     city: 'Lisbon'
 };

 function change(a, b){
     a = 30;
     b.city = 'San Francissco';
 }

 change(age, obj);
 console.log(age);
 console.log(obj.city);
 */


 // FUnctions as arguments

 /*
 var years = [1990, 1965, 1937, 2005, 1998];

 function arrayCalc(arr, fn) {
     var arrRes = [];
     for(var i=0; i<arr.length; i++){
         arrRes.push(fn(arr[i]));
     }
     return arrRes;
 }

 function calculateAge(el) {
     return 2020 - el;
 }

 function isFullAge(el){
     return el >= 18;
 }

 function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

 var ages = arrayCalc(years, calculateAge);
 var fullAges = arrayCalc(ages, isFullAge);
 var rates = arrayCalc(ages, maxHeartRate);

 console.log(ages);
 console.log(fullAges);
 console.log(rates);
 */


 // Function returning Function

 /*
 function interviewQuestion(job) {
     if(job === 'designer') {
         return function(name) {
             console.log(name + ', can you please explain what UX design is?');
         }
     } else if(job === 'teacher') {
         return function(name) {
             console.log('What subject do you teach, ' + name + '?');
         }
     } else{
         return function(name) {
             console.log('Hello ' + name + ', what do you do?');
         }
     }
 }

 var teacherQuestion = interviewQuestion('teacher');
 var designerQuestion = interviewQuestion('designer');
 var whoRU = interviewQuestion('wru');

 teacherQuestion('John');
 whoRU('John');
 designerQuestion('John');
 designerQuestion('Ravi');
 designerQuestion('Shreya');
 designerQuestion('Priti');
 designerQuestion('Abhishek');
 designerQuestion('Jane');

 interviewQuestion('teacher')('Mark');
 */

 // IIFE

 /*
 function game(){
     var score = Math.random() * 10;
     console.log(score >= 5);
 }

 game();

 (function () {
     var score = Math.random() * 10;
     console.log(score >= 5);
 })();

 //console.log(score);

 (function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(5);
*/

// CLosure

function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


function jobInterview(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        }
        else if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        }
        else{
            console.log('Hello ' + name + ', What do you do??');
        }
    }
}

var teacherQuestion = jobInterview('teacher');
var designerQuestion = jobInterview('designer');
var whoRU = jobInterview('wru');

teacherQuestion('mary');
designerQuestion('Aniket');
whoRU('Shreya');