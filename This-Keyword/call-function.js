const alex = {
    name: 'alex',
    friend: {
        name: 'Priya',
        greet: function(...args) { //'...' to allow passing multiple arguments beforehand.
            console.log(args);
            console.log(`${this.name} says hi.`)
        }
    }
}

alex.friend.greet.call({name: 'Mia'}, 1, 2, 3,)
alex.friend.greet.call({name: 'Jim'})
alex.friend.greet.apply({name: "Zasha"}, [1, 2, 3])