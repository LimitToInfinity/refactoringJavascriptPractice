const {map, forEach, flow} = require("lodash/fp");

// var teachers = ["Kyle", "Potts", "Damon", "Dina", "Vui", "Mark"];

// var loudTeacher = ""
// for (var i =0; i < teachers.length; i++) {
//     loudTeacher = teachers[i] + "!";
//     console.log(loudTeacher);
// }

["Kyle", "Potts", "Damon", "Dina", "Vui", "Mark"]
    .map(loudify)
    .forEach(shout);

function loudify(string) { return `${string}!` }
function shout(string) { console.log(string) }

const teachers = ["Kyle", "Potts", "Damon", "Dina", "Vui", "Mark"];

const loudifyAndShout = flow([
    loudifyAll,
    shoutAll,
])();

loudifyAndShout(teachers);

function loudifyAll(arrayOfStrings) { return arrayOfStrings.map(loudify) }
function shoutAll(arrayOfStrings) { return arrayOfStrings.forEach(shout) }

const loudTeachers = 
flow([
    loudify,
    shout,
])(["Kyle", "Potts", "Damon", "Dina", "Vui", "Mark"])