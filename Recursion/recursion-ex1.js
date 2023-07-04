const palendrome = (string) => {
    const numberOfLetters = string.length;
    //* BASE CASE
    if (numberOfLetters === 1) return true; // STOP

    //* REGULAR CASE
    if (string[0] === string[numberOfLetters - 1]) {
        //console.log(string.slice(1, -1));
        return palendrome(string.slice(1, -1))
    }
    return false;
};

const result = palendrome('wow');
console.log(result);