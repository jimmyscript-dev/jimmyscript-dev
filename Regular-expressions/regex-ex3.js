const phoneNumber = '+1 020-382-6940';

const phoneNumberPattern = /.\d*\s\d*-\d*-\d*/;

const test = phoneNumberPattern.test(phoneNumber);
console.log(test);

const match = phoneNumber.match(phoneNumberPattern);
console.log(match);