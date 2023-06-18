//MAP CONCEPTS

const cities = ['london', 'vancouver', 'mumbai', 'new york'];


//map() transforms an array to a new array
 
 //regular function
 function bigCities(city) {
   return city.toUpperCase();
 }
 
 const citiesToUpperCase = cities.map(bigCities);
 console.log(citiesToUpperCase);
 
 //arrow function
 const bigCity = cities.map((city) => {
   return city.toUpperCase();
 })
 
 
 const numbers = [5, 10, 15, 20, 25];
 
 const timesTen = numbers.map((number) => {
   return number * 10
 })
 
 console.log(timesTen)