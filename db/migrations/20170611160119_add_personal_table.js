exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('personals', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('apellido')
      table.string('cedula')
      table.string('codigo_r')
      table.integer('telefono')
      table.string('cargo')
      table.integer('edad')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('personals')
  ])
)