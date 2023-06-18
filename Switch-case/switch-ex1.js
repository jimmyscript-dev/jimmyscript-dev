const acitivities = ['Swimming', 'Hiking', 'Rock Climbing', 'Biking', 'Running'];

for (const activity of acitivities) {
    if (activity === 'Swimming') {
        console.log('Like a fish!');
    } else if (activity === 'Rock Climbing') {
        console.log('Like a mountain goat!');
    } else if (activity === 'Running') {
        console.log('Like a cheetah!');
    } else {
        console.log("I'm sure some animal does that...");
    }
};

console.log('---------------------');

for (const activity of acitivities) {
    switch (activity) {
        case 'Swimming': {
            console.log('Like a fish!');
            break;
        }

        case 'Rock Climbing': {
            console.log('Like a mountain goat!');
            break;
        }

        case 'Running': {
            console.log('Like a cheetah!');
            break;
        }

        default: {
            console.log("I'm sure some animal does that...");
            break;
        }
    };
};