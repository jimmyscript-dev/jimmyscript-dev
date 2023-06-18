/*const sentence = 'There once wAs a monkey who knew Javascript...';

const pattern = /w[\w]s/;

const test = pattern.test(sentence);

console.log(test)

const match = sentence.match(pattern);
console.log(match);*/

const sentence2 = 'There once was a monkey who once knew Javascript....';

const pattern2 = /once/ig;
const exists = pattern2.test(sentence2);
console.log(exists);

const match2 = sentence2.match(pattern2);
console.log(match2);