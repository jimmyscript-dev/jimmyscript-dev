const enemies = {
    rat: {atk: 3, def: 2, hp: 20, class: 1},
    goblin: {atk: 10, def: 6, hp: 50, class: 1},
    troll: {atk: 30, def: 20, hp: 200, class: 2},
    giant: {atk: 50, def: 40, hp: 500, class: 2}
};


for (const enemy of Object.values(enemies)) {
    switch (enemy.class) {
        case 1: {
            console.log('This is an easy fight!');
            break;
        }

        case 2: {
            console.log('This will require training...');
            break;
        }

        default: {
            console.log('Not implemented yet...');
            break;
        }
    }
};