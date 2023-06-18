const food = 'Sushi'

if (food === 'Fish') {
    console.log('Sounds fishy');
} else if (food === 'Hummus') {
    console.log('Want some chips with that?')
} else if (food === 'Sushi') {
    console.log('With or without seaweed?')
} else {
    console.log('Food not in our database, sorry!')
}

switch (food) {
    case 'Fish': {
        console.log('Sounds Fishy!');
        break;
    }

    case 'Hummus': {
        console.log('Want some chips with that?');
        break;
    }

    case 'Sushi': {
        console.log('With or without seaweed?');
        break;
    }

    default: {
        console.log('Food not in our database, sorry!');
        break;
    }
};

