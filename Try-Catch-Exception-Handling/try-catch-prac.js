console.log('Program Start.');

try {
    throw new Error('Uh-oh!')
} catch(error) {
    console.log(error);
}

console.log('Program Finished.');

/*console.log('Program Start');
throw new Error('uh-oh');
console.log('Program Finished.')*/