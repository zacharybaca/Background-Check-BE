const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findBy,
    add,
    findById,
    remove,
    update,
};

function find() {
    return db('orders');
}

function findBy(filter) {
    return db('orders').where(filter);
}

async function add(candidate) {
    const [id] = await db('users').insert(candidate);
    
    return findById(id);
  }

function findById(id) {
    return db('orders')
    .where({id})
    .first();
}

function remove(id) {
	return db('orders')
		.where('id', id)
		.del();
}

function update(id, changes) {
	return db('orders')
		.where({ id })
		.update(changes);
}