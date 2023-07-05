const flatten = (obj) => {
    let value = {};
    for (item in obj) {
        if (typeof obj[item] === 'object') {
            const objflat = flatten(obj[item])
            value = {...value, ...flatten(objflat)};
            return value;
        } else {
            value[item] = obj[item]
        }
    }

    return value;
}

const output = flatten({
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: '+91-999999999',
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG",
        web: {
            site: {
                profile: 'jimmyscript-dev',
                socials: {
                    name: {
                        Facebook: 'Jim Russ',
                        Instagram: 'jimmychilipeppers___'
                    }
                }
            }
        }
    }
});
console.log(output);