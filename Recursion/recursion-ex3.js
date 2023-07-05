const ob = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: '+91 - 999999999',
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
}
const flatten = (obj) => {
    let value = {};
    for (item in obj) {
        if (typeof obj[item] === 'object' && !Array.isArray(item)) {
            console.log(obj[item]);
            const objectFlat = flatten(obj[item])
            for (innerItem in objectFlat) {
                value[item + ' ' + innerItem] = objectFlat[innerItem]
            }
        } else {
            value[item] = obj[item];
        }
    }


    return value;
}

const output = flatten(ob);
console.log(output);