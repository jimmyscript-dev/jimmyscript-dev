const email = 'monkeys.baboon12@trees.com';

//! shortcut pattern!
//const emailPattern = /.*/;

//* long pattern
const emailPattern = /\w*\.\w*@\w*\.com$/

const test = emailPattern.test(email);
console.log(test);

const match = email.match(emailPattern);
console.log(match);