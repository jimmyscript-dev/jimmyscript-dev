const createDatabase = () => {
    const storage = ['Apple', 'Banana', 'Carrot'];

    const addToDB = (data) => {
        storage.push(data);
        return storage;
    }

    const clearDB = () => {

        storage.length = 0;
        return storage;
    }

    return [addToDB, clearDB];
    
};

//! ARRAYS
/*const getData = createDatabase();
const add = getData[0];
const clear = getData[1];
console.log(add('Orange'));
console.log(clear());*/

const [addToDataBase, clearData] = createDatabase();
console.log(addToDataBase('Orange'));
console.log(clearData());

//! OBJECTS
/*let useData = createDatabase();
let addtoDb = useData.addToDB;
let clearData = useData.clearDB;
console.log(addtoDb);
console.log(addtoDb('Peach'))
console.log(clearData);
console.log(clearData());*/