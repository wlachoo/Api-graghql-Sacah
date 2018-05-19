const { Model } = require('objection')
const path = require('path')

class Usuario extends Model {
  static get tableName () {
    return 'usuarios'
  }
}

module.exports = Usuario