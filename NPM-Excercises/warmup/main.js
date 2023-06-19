import { camelCase } from "lodash-es";
import { map } from "lodash-es";
import { reduce } from "lodash-es";
import { toUpper } from 'lodash-es';
import { filter } from 'lodash-es';
const cases = camelCase('i love javascript!');
console.log(cases);


const square = (n) => {
    return n * n;
}

const result = map([25, 26], square);
console.log(result);


const totalSum = reduce([1, 2], (sum, num) => {
    return sum + num;
}, 0);

console.log(totalSum);

const bigCase = toUpper('the quick brown fox jumps over the lazy dog.');
console.log(bigCase);

const users = [{
        'user': 'barney',
        'age': 36,
        'active': true
    },
    {
        'user': 'fred',
        'age': 40,
        'active': false
    }
];

const filtering = filter(users, ['active', false]);
console.log(filtering);

//! Barney
const filter2 = filter(users, ['user', 'barney']); 
console.log(filter2);
const fitler3 = filter(users, ['age', 36]);
console.log(fitler3);