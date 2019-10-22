'use strict';

const repl = require('repl');

let students = [
  'Alistair Blake',
  'Avery Brown',
  'Peter Carmichael',
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



function getRandomPairs() {
  let unused = [
    'Alistair Blake',
    'Avery Brown',
    'Peter Carmichael',
    'Julie Erlemeier',
    'Sarah Gilliam',
    'Matthew Heyert',
    'Adrian Huebner',
    'Jonathan Andrew Kimball',
    'Corey J Marchard',
    'David Zheng',
  ]

  const results = [];
  let student1, student2;
  while (unused.length) {
    student1 = unused[Math.floor(Math.random() * Math.floor(unused.length))];
    student2 = unused[Math.floor(Math.random() * Math.floor(unused.length))];

    if (student1 !== student2) {
      results.push(`${student1} | ${student2}`);
      unused.splice(unused.indexOf(student1), 1);
      unused.splice(unused.indexOf(student2), 1);
    }
  }
  return results;
}

console.log('Random Student functions loaded \n', 'find random students with: `randomStudent()`\n', 'Make random Pairs with `randomPairs()');
const r = repl.start('> ');
r.context.randomStudent = getRandomStudent;
r.context.randomPairs = getRandomPairs;
