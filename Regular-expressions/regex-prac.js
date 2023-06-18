const quote = 'What is this?  center for ants?';

const pattern = /ant/;

const test = pattern.test(quote);
console.log(test);

const match = quote.match(pattern);
console.log(match);