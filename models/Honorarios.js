const { Model } = require('objection')
const path = require('path')

class Honorario extends Model {
  static get tableName () {
    return 'honorarios'
  }
}

module.exports = Honorario

