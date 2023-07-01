const mine = {
    gold: 3,
    left: {
        gold: 2,
        left: {
            gold: 4
        },
        right: {
            gold: 1
        }
    },
    right: {
        gold: 5,
        right: {
            gold: 1
        }
    }
}

const goldOres = (level) => {
    let totalGold = level.gold;
    
    if (level.left) totalGold += goldOres(level.left);

    if (level.right) totalGold += goldOres(level.right);

    return totalGold;
}

const result = goldOres(mine);
console.log(result);