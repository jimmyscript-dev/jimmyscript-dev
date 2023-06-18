const companies = [
    'apple',
    'tesla',
    'spacex',
    'amazon',
    'meta',
    'google'
];

const modded = companies.reduce((result, mod) => {
    if (mod === "a") {
        result.remove('a')
        return result + mod + '-'
    }

    return result;
}, "")
console.log(companies)
console.log(modded);