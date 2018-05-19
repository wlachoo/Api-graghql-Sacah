exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('asistencias', (table) => {
      table.increments('id').primary().unsigned()
      table.string('cpc')
      table.string('h_entrada')
      table.string('h_salida')
      table.string('observaciones')
      table.string('telefono')
      table.string('turno')
      table.string('fecha')
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('asistencias')
  ])
)