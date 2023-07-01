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

const getChildrenName = (objectName) => {
    if (objectName.children.length === null) {
        return;
    }
    objectName.children.forEach((child) => {
        console.log(child.name);
        return getChildrenName(child);
    })
};

const result = getChildrenName(tree);
console.log(result);