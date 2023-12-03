const itemModel = require('../models/item')

async function listItems(){
  const items = await itemModel.findAll();
  return items;
}

async function createItem(item){
    return itemModel.create(item);
}

async function getItem(idItem){
	const item = await itemModel.findAll({
		where: {
		  id: idItem
		}
	  });
	return item;
}

async function updateItem(idItem, nomeItem, valorItem){

	const itemAntigo = await itemModel.findOne({ where: { id: idItem } });
	if(itemAntigo){
		itemAntigo.nome = nomeItem
		itemAntigo.valor = valorItem
		
	}
	return await itemAntigo.save();
	
}

async function deleteItem(idItem){
	const item = await itemModel.destroy({
		where: {
		  id: idItem
		}
	  });
	return item;
}

module.exports = {listItems, createItem, getItem, updateItem, deleteItem}