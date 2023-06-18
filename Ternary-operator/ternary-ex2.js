const wizards = ['Gandalf', 'Voldermort', 'Harry', 'Jafar', 'Saruman', 'Merlin'];

wizards.map((wizard) => {
    if (wizard.includes('n')) {
        console.log(wizard.replace('n', '*'));
    } else {
        console.log(wizard.toUpperCase());
    }
});

console.log('------------------');


wizards.map((wizard) => wizard.includes('n') ? console.log(wizard.replace('n', '*')) : console.log(wizard.toUpperCase()));