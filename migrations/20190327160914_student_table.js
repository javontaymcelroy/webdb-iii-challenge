// what new changes do we need to make
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student', function(tbl) {
    // primary key, called id and make it auto-increment
    tbl.increments();

    tbl
      .string('name', 128)
      .notNullable()
      .unique();
  });
};

// how to undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('student');
};
