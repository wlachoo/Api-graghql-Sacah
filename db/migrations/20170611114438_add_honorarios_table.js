exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('honorarios', (table) => {
      table.increments('id').primary().unsigned()
      table.integer('horas_t')
      table.float('bs_acumulados')
      table.integer('turnos')
      table.integer('personal_id').unsigned()
    })
  ])
)

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('honorarios')
  ])
)