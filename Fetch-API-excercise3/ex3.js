import fetch from 'node-fetch';
import fs from 'fs/promises';



const response = fetch('https://w.wallhaven.cc/full/yx/wallhaven-yxqzpd.jpg')
    .then((response) => response.arrayBuffer())
    .then((result) => {
        fs.writeFile('wallpaper.jpg', buff.from(result))
    })