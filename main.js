const members = [
    { name: 'Rakesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];

// Get array of first names of everyone
/**
 * let result = members.map(a => a.name);
 */
const result = members.map(function (getName) {
    return getName.name;
});
const firstName = result.map(function (fName) {
    return fName.substring(0, fName.indexOf(' '));
});
console.log(firstName);


// Make everyone's last names in UPPERCASE in given array of objects
function capitalize(arr) {
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].name;
        arr[i].name = name.slice(0, name.indexOf(" ")) + " " + name.slice(name.indexOf(" ") + 1).toUpperCase();
    }
    return arr;
}
console.log(capitalize(members));


// Get entries where age is between 41 - 60
const specificAge = members.filter(function (el) {
    return el.age > 40 && el.age < 61;
});
console.log(specificAge);


// Get average age
const getSumOfAges = members.reduce((acc, curr) => curr.age !== undefined ? acc + curr.age : acc + 0, 0);
const getCountOfAges = members.reduce((acc, cur) => cur.age !== undefined ? ++acc : acc, 0);
const getAverageAge = getSumOfAges / getCountOfAges;
console.log(`\nAverage Age = ${getAverageAge}`);


// Get Person with maximum age
const personWithMaxAge = Math.max.apply(Math, members.map(function (o) { return o.age !== undefined ? o.age : 0; }))
console.log(`\nPerson having maximum Age : ${personWithMaxAge}`);


/*
Divide persons in three groups, result should look like
{
    'young': [],
        'old': [],
            'noage': []
}
    Less than 35yrs is young, above 35 is old
*/
let dividedPersons = {};
let yougPerson = [];
let oldPerson = [];
let noAgePerson = [];
function divide(arr) {
    if (arr.age !== undefined) {
        if (arr.age <= 35) {
            let temp = {};
            temp.name = arr.name;
            temp.age = arr.age;
            yougPerson.push(temp);
        } else {
            let temp = {};
            temp.name = arr.name;
            temp.age = arr.age;
            oldPerson.push(temp);
        }
    } else {
        noAgePerson.push(arr.name);
    }
}
members.map(divide);
dividedPersons.young = yougPerson;
dividedPersons.old = oldPerson;
dividedPersons.noage = noAgePerson;
console.log(dividedPersons);


// add a new member to same members array instance at index 2
/**
 * splice() takes 3 or more arguments. The first is the start index: the place where we’ll start making the changes. 
 * The second is the delete count parameter. We’re adding to the array, so the delete count is 0 in all our examples. 
 * After this, you can add one or many items to add to the array.
 */
members.splice(1, 0, { name: "Jayesh SONI", age: 21 });
console.log(members);


// extract first and second element using destructing
const [array0, array1] = members.map(obj => obj.name + " : " + obj.age)
console.log(array0 + "\n" + array1);


/*
Create a new array instance adding a new member at index 0,
    and keeping existing afterwards
*/
members.splice(0, 0, { name: "Riddhi JAIN", age: 20 });
console.log(members);


// Extract properties of object using destructuring
const { name, age } = members[2];
console.log(name + ":" + age);


// Rename extracted property of object while destructing
const person = {
    firstName: 'Tom',
    lastName: 'Cruise'
}
const { firstName: name_of_person, lastName } = person
console.log(name_of_person);


/*
Destructure any property of an object and use spread operator
    to get remaining properties in an object
*/
const user = {
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43
}
const { address, ...user_details } = user;
console.log(user_details);