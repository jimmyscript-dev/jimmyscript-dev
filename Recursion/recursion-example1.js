const recursiveSum = (number, total) => {
    //base case // stopper
    if (number <= 0) {
        return total;
    }
    return recursiveSum(number - 1, total + number);
};

//const result = recursiveSum(3, 0);
//console.log(result); //6


const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                {name: 'Kyle', children: []},
                {name: 'Sophia', children: []}
            ]
        }
    ]
};


const getTheChildNames = (obj) => {
    if (obj.children.length === 0) {
        return;
    }
    obj.children.forEach((childrenNames) => {
        console.log(childrenNames.name);
        return getTheChildNames(childrenNames);
    })
};

const result = getTheChildNames(tree);
console.log(result);