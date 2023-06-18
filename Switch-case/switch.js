const animal = 'Koala';

switch (animal) {
    case 'Tiger': {
        console.log('You are a tiger.');
        break;
    }

    //! this case block will work as || operator. then it breaks out the loop 'break;'
    case 'Koala':
    case 'Monkey': {
        console.log('Oh oh ah ah');
        break;        
    }

    default: {
        console.log('Here I am!');
        break;
    }
}

console.log('All done!');