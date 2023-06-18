try {
    const user = {
        name: 'Alex',
        age: 21,
        //profile: {
         //  color: 'blue'
       // }
    };

    console.log(user.profile.color);
    console.log('do i get here?')
} catch (error) {
    console.log('something bad happened')
    console.log(error)

}

