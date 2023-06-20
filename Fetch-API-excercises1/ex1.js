import fetch from 'node-fetch';

const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
const fetchData = await response.json();
console.log(fetchData);