const _ = require("lodash");

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
const getFirstNames = _.map(members, (member) => { return _.split(member.name, ' ')[0] });
console.log(getFirstNames);


// Make everyone's last names in UPPERCASE in given array of objects
const getLastNames = _.map(members, (member) => { return _.split(member.name, ' ')[1] })
const toUpperLastName = _.map(getLastNames, lastName => lastName.toUpperCase());
console.log(toUpperLastName);


// Get entries where age is between 41 - 60
const getSpecificAges = _.filter(members, member => member.age > 40 && member.age < 61);
console.log(getSpecificAges);


// Get average age
const getSumOfAges = _.reduce(members, (acc, curr) => curr.age !== undefined ? acc + curr.age : acc + 0, 0);
const getCountOfAges = _.reduce(members, (acc, curr) => curr.age !== undefined ? ++acc : acc, 0);
getAverageAge = getSumOfAges / getCountOfAges;
console.log(`Average Age => ${getAverageAge}`);


// Get Person with maximum age
const getMaxAge = _(members).reduce((obj, item) => _.merge(obj, item, (a, b) => a > b ? a : b));
console.log(getMaxAge);


/*
Divide persons in three groups, result should look like
    {
      'young': [],
      'old': [],
      'noage': []
    }
    Less than 35yrs is young, above 35 is old
*/

const dividedPersons = {};
const youngMembers = [];
const oldMembers = [];
const noAgeMembers = [];
const divide = _.reduce(members, function (obj, el) {
    let temp = {};
    if (el.age !== undefined) {
        if (el.age < 35) {
            temp.name = el.name;
            temp.age = el.age;
            youngMembers.push(temp);
        } else {
            temp.name = el.name;
            temp.age = el.age;
            oldMembers.push(temp);
        }
    } else {
        noAgeMembers.push(el.name);
    }
}, {});
dividedPersons.young = youngMembers;
dividedPersons.old = oldMembers;
dividedPersons.noage = noAgeMembers;
console.log(dividedPersons);


// add a new member to same members array instance at index 2
const newMember = {
    name: "Jayesh Soni",
    age: 21
};
_.insert = function (arr, index, item) {
    arr.splice(index, 0, item);
};
_.insert(members, 1, newMember);
console.log(members);


// extract first and second element using destructing
const result1 = _.take(members, 2);
console.log(result1);

const result2 = _.slice(members, 0, 2);
console.log(result2);


// Create a new array instance adding a new member at index 0 and keeping existing afterwards
const newMem = {
    name: "Tim Cook",
    age: 70
};
const modifiedMembers = _.concat(newMem, members);
console.log(modifiedMembers);