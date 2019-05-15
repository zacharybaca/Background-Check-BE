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
    return db('candidates');
}

function findBy(filter) {
    return db('candidates').where(filter);
}

async function add(candidate) {
    const [id] = await db('users').insert(candidate);
    
    return findById(id);
  }

function findById(id) {
    return db('candidates')
    .where({id})
    .first();
}

function remove(id) {
	return db('candidates')
		.where('id', id)
		.del();
}

function update(id, changes) {
	return db('candidates')
		.where({ id })
		.update(changes);
}