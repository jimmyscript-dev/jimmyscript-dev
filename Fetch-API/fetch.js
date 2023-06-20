import fetch from 'node-fetch';

const response = fetch('https://www.wallhaven.cc/');


/*response.then((result) => {
    /*
    for (const key in result) {
        console.log(key);
    }
    */
    //console.log(result.__proto__.__proto__)
   /* console.log(result.status);
    console.log(result.url);
    console.log(result.body);
    console.log(result.ok)*/

    /*const text = result.text();
    text.then((value) => {
        console.log(value)
    })

    return result.text()
}).then((html) => {
    console.log(html);
});*/

const fetchData = async () => {
    const response = await fetch('https://www.wallhaven.cc/');
    const html = await response.text();
    console.log(html)
}

fetchData();