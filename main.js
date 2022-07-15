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