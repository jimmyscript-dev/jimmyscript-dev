const monkey = {
    name: 'Abu',
    species: 'Capuchin',
    hobbies: ['stealing'],
    age: 10
};
const tiger = 'Rajah'
const printMonkey = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            monkey.age++;
            console.log(monkey);
            resolve(monkey)
        }, 2000)
    })

};

const awaitMonkey = await printMonkey();
//! named export
export { awaitMonkey };
//! Default Export
export default printMonkey;