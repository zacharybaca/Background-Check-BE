const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
};

function find() {
    return db('candidates');
}

function findById(id) {
    return db('candidates').where({ id: Number(id) });
}

function insert(user) {
    return db('candidates')
        .insert(candidate)
        .then(ids => ({ id: ids[0] }));
}

function update(id, user) {
    return db('candidates')
        .where('id', Number(id))
        .update(candidate);
}

function remove(id) {
    return db('candidates')
        .where('id', Number(id))
        .del();
}