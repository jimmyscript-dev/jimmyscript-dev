try {
    const user = {
        name: 'Misha',
        age: 22,
        settings: {
            color: blue
        }
    };
    console.log('Creating User...')
    console.log(user.settings.color)
    console.log('User Created!');
} catch(err) {
    console.log(err)
}

console.log('Program complete')