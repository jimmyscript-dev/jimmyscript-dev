import fetch from 'node-fetch';
import fs from 'fs/promises';


fetch('https://w.wallhaven.cc/full/j3/wallhaven-j3m8y5.png')
    .then((response) => response.arrayBuffer())
    .then((image) => {
        fs.writeFile('wallpaper.png', Buffer.from(image))
    })


fetch()