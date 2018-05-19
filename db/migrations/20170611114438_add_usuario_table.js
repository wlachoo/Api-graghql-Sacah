exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('usuarios', (table) => {
      table.increments('id').primary().unsigned()
      table.integer('personal_id').unsigned()
      table.string('correo')
      table.string('email')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('usuarios')
  ])
)