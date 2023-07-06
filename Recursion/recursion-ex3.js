const flatten = (obj) => {
    let value = {};
    for (const item in obj) {
        if (typeof obj[item] === 'object') {
            const objFlat = flatten(obj[item]); //* assuming this will become an object. 
            value = {...value, ...flatten(obj[item])} //* object values will be stored inside 'value' object.
            return value;
            //console.log(value)
        } else {
            (value[item] = obj[item]); //* store ojb directly
            
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