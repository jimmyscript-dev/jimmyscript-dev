const thor = {
    name: 'thor',
}



const jade = {
    name: 'jade',
}

Object.prototype.greet = function() {
    console.log(`${this.name} says hello!`)
    console.log(this) // points out to the 'name' property
}

thor.greet();
jade.greet();


const alex = {
    name: 'alex',
    friend: {
        name: 'Jim',
        greet: function() {
            console.log(`${this.name} says hi!`);
            console.log(this);
        }
    }
}
alex.friend.greet();


