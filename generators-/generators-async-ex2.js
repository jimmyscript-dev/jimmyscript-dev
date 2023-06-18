const letterGenerator = async function* (sentence) {
    for (const letter of sentence) {
        yield new Promise((resolve) => {
            setTimeout(() => {
                ['a', 'e', 'i', 'o', 'u'].includes(letter) ? resolve('*') : resolve(letter.toUpperCase())
            }, 100)
        })
    }
}

const letterGenObject = letterGenerator('the quick brown fox jumps over the lazy dog.');

const generateLetters = async () => {
    for await (const letter of letterGenObject) {
        console.log(letter);
    }
};

generateLetters();