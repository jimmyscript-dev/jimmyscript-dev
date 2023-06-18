const points = [3, 4, 1, 0, 5, 6];

for (const point of points) {
    switch (point) {
        case 0:
        case 1:
        case 2: {
            console.log('Good try!');
            break;
        }

        case 3:
        case 4:
        case 5: {
            console.log('Very well done!');
            break;
        }

        default: {
            console.log('Wow, shooting for the moon!');
            break;
        }
    }
};