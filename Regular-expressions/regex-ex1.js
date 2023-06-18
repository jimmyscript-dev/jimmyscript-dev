const email = 'monkeys@trees.com';

const emailPattern = /\.com$/;

const test = emailPattern.test(email);
console.log(test);

const match = email.match(emailPattern);
console.log(match);