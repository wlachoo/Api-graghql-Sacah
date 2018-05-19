const { Model } = require('objection')
const path = require('path')

class Asistencia extends Model {
  static get tableName () {
    return 'asistencias'
  }
}

module.exports = Asistencia