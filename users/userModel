const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};



function find() {
  return db('background');
}

function findById(id) {
  return db('background')
  .where({id: (id) })
  .first();
}

function insert(background) {
  return db('backgrounds')
    .insert(background)
    .then(ids => ({ id: ids[0] }));
}

function update(id, background) {
  return db('backgrounds')
    .where('id', (id))
    .update(background);
}

function remove(id) {
  return db('backgrounds')
    .where('id',(id))
    .del();
}




