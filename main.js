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
console.log(getAverageAge);