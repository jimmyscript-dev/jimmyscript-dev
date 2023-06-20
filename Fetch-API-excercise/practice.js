import fetch from 'node-fetch';

const response = fetch('https://www.craigslist.org/about/');

const fetchData = async () => {
    const response = await fetch('https://craigslist.org/about/');
    const hmtlRespo = await response.text();
    console.log(hmtlRespo);
};

fetchData();