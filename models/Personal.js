const { Model } = require('objection')
const path = require('path')

class Personal extends Model {
  static get tableName () {
    return 'personals'
  }
}

module.exports = Personal