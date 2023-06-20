import fetch from 'node-fetch';

const response = fetch('https://www.craigslist.org/about/');

const fetchData = async () => {
    const response = await fetch('https://www.craigslist.org/about/');
    const htmlResponse = await response.text();
    console.log(htmlResponse);
};

fetchData();