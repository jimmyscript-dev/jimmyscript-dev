import fetch from 'node-fetch';
import fs from 'fs/promises';


/*fetch('https://w.wallhaven.cc/full/8o/wallhaven-8ow3q1.jpg')
    .then((response) => response.arrayBuffer())
    .then((image) => {
        fs.writeFile('wallpaper.jpg', Buffer.from(image))
    })
*/

const saveImage = async () => {
    const savePNG = await fetch('https://w.wallhaven.cc/full/72/wallhaven-72kqeo.png');
    const data = await savePNG.arrayBuffer();
    const saveFile = await fs.writeFile('wallpaper_2.png', Buffer.from(data))
    return saveFile;
}
saveImage();