const stringBuilder = () => {
    let result = ''; // hello => there => friend.
    const add = (characters) => {
        result += characters + ' '; // result = result + characters + ' '
        return result;
    }
    
    return add;
};
const builder = stringBuilder(); // builder variable assumes as a function now.
let text = builder('hello');
console.log(text); // hello
text = builder('there');
console.log(text); // hello there
text = builder ('friend!'); // hello there friend
console.log(text);