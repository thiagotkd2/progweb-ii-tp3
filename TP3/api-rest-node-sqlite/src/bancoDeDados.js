const database = require('./db')
const Item = require('./models/item');

let items = {};

function createItem(item){
    const resultado = database.sync();
    console.log(resultado);

    return Item.create(item);
}

function getItem(id){
    return items[id]
}

function deleteItem(id){

    if(id in items){
        delete items[id]
        return `Item ${id} removed`;
    } else {
        throw new Error(`Item ${id} not found!`);
    }
}


function listItems(){
    const resultado = database.sync();
    console.log(resultado);

    return Item.findAll();
}

module.exports = {createItem, getItem, listItems, deleteItem}
