const fakeArray = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    length: 3
};
fakeArray.__proto__ = Array.prototype; //assumes Object prototype becomes an Array Prototype.


//! We can use now array methods since we changed the Object to an Array.
fakeArray.map((values) => {
    console.log(values)
})