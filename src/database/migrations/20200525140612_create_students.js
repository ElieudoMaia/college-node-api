
exports.up = function(knex) {
    return knex.schema.createTable('students', function(table) {
        table.uuid('id').primary();
        table.string('name').notNullable();
        table.string('registration').notNullable();
        table.uuid('course_id').notNullable();
        table.foreign('course_id').references('id').inTable('courses').onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('students');
};