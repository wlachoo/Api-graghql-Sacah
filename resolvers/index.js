const Personal = require('../models/Personal')
const Usuario = require('../models/Usuario')
const Honorarios = require('../models/Honorarios')
const Asistencia = require('../models/Asistencia')


module.exports = {
  Query: {
    personals: () => Personal.query(),
    personal: (rootValue, args) => Personal.query().findById(args.id),
    usuarios: () => Usuario.query().eager('personals'),
    usuario: (rootValue, args) => Usuario.query().eager('personals').findById(args.id),
    honorarios: () => Honorarios.query().eager('personals'),
    honorario: (rootValue, args) => Honorarios.query().eager('personals').findById(args.id),
    asistencias: () => Asistencia.query().eager('personals'),
    asistencia: (rootValue, args) => Asistencia.query().eager('personals').findById(args.id),
    buscar: (rootValue, params) => {
      return [
        Personal.query().findById(3),
        Usuario.query().findById(1)
      ]
    }
  },
  Mutation: {
    personalAdd: (_, { personal }) => {
      return Personal
        .query()
        .insert(personal)
    },
    personalDelete: (_, { personalId }) => {
      return Personal.query().findById(personalId).then(personal => {
        return Personal.query().deleteById(personalId).then(() => personal)
      })
    },
    personalEdit: (_, { personalId, personal }) => {
      return Personal
        .query()
        .patchAndFetchById(personalId, personal)
    },
    usuarioAdd: (_, { usuario }) => {
      return Usuario
        .query()
        .insert(usuario)
    },
    usuarioDelete: (_, { usuarioId }) => {
      return Usuario.query().findById(usuarioId).then(usuario => {
        return Usuario.query().deleteById(usuarioId).then(() => usuario)
      })
    },
    usuarioEdit: (_, { usuarioId, usuario }) => {
      return Usuario
        .query()
        .patchAndFetchById(usuarioId, usuario)
    },
    honorariosDelete: (_, { honorariosId }) => {
      return Honorarios.query().findById(honorariosId).then(honorarios => {
        return Honorarios.query().deleteById(honorariosId).then(() => honorarios)
      })
    },
    honorariosEdit: (_, { honorariosId, honorarios }) => {
      return Honorarios
        .query()
        .patchAndFetchById(honorariosId, honorarios)
    },
    honorariosAdd: (_, { honorarios }) => {
      return Honorarios
        .query()
        .insert(honorarios)
    },
    asistenciaAdd: (_, { asistencia }) => {
      return Asistencia
        .query()
        .insert(asistencia)
    },
    asistenciaDelete: (_, { asistenciaId }) => {
      return Asistencia.query().findById(asistenciaId).then(asistencia => {
        return Asistencia.query().deleteById(asistenciaId).then(() => asistencia)
      })
    },
    asistenciaEdit: (_, { asistenciaId, asistencia }) => {
      return Asistencia
        .query()
        .patchAndFetchById(asistenciaId, asistencia)
    }
  }       
}