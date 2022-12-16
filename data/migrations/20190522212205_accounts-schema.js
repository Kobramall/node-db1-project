
exports.up = function(knex) {
  return knex.schema.createTable('locations', tbl => {
    tbl.increments();
    tbl.string('name')
      .notNullable()
      .unique();
     tbl.integer('zipCode')
     .notNullable()
     .unique()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('locations');
};
