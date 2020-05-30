
exports.up = function(knex) {
    return knex.schema.createTable('courses', function(table) {
        table.uuid('id').primary();
        table.string('course_name').notNullable();
        table.integer('duration').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses');
};
