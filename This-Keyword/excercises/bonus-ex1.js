function ThisPerson(name, age, favoriteFood) {
    this.name = name;
    this.age = age;
    this.favoriteFood = favoriteFood;
}
function PrototypePerson(name, age, favoriteFood) {
    const instance = {name, age, favoriteFood};
    instance.__proto__ = PrototypePerson.prototype;
    return instance;
}

 const thisPerson = new ThisPerson('Jim', 19, 'Pork')
 const prototypePerson = PrototypePerson('Jim', 19, 'Pork');

 console.log(thisPerson);
 console.log(prototypePerson);