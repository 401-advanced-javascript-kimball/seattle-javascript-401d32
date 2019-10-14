'use strict';

const repl = require('repl');

const students = [
  'Alistair Blake',
  'Avery Brown',
  'Peter Carmichael',
  'Ethan Davis',
  'Julie Erlemeier',
  'Sarah Gilliam',
  'Matthew Heyert',
  'Adrian Huebner',
  'Jonathan Andrew Kimball',
  'Corey J Marchard',
  'David Zheng',
];

function getRandomStudent() {
  const randomIndex = Math.floor(Math.random() * Math.floor(students.length));
  const student = (students[randomIndex]);
  students.splice(randomIndex, 1);
  if (student) {
    return student;
  }
  return 'All Students have been randomly selected :)';
};

console.log('Random Student function loaded, run with `randomStudent()`');
repl.start('> ').context.randomStudent = getRandomStudent;

