exports.up = function(knex) {
    return knex.schema.createTable('messages', function(table) {
      table.increments('id').primary();
      table.integer('from_user_id').references('users.id');
      table.integer('to_user_id').references('users.id');
      table.text('message');
      table.timestamps();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('messages');
  };