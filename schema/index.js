const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../resolvers')
const Asistencia = require('./Asistencia')
const Honorarios = require('./Honorarios')
const Personal = require('./Personal')
const Usuario = require('./Usuario')

const rootTypes = `
  union ResultadoBusqueda = Asistencia | Usuario | Personal | Honorarios
  type Query {
    asistencias: [Asistencia]
    asistencia(id: Int): Asistencia
    honorarios: [Honorarios]
    honorario(id: Int): Honorarios
    personals: [Personal]
    personal(id: Int): Personal
    usuarios: [Usuario]
    usuario(id: Int): Usuario
    buscar(query: String): [ResultadoBusqueda]
  }

  input NuevoUsuario {
    personal: Int!
    password: String
    correo: String!
    personal:Int!
  }

  input UsuarioEditable {
    personal: Int!
    password: String
    correo: String!
    personal:Int!
  }

  input NuevoPersonal {
    nombre: String!
    apellido: String!
    cedula: String!
    codigo_r: String!
    telefono: Int!
    cargo: String!
    edad: Int!
  }

  input PersonalEditable {
    nombre: String!
    apellido: String!
    cedula: String!
    codigo_r: String!
    telefono: Int!
    cargo: String!
    edad: Int!
  }

  input AsistenciaEditable {
    cpc:String!
    h_entrada: String!
    h_salida: String!
    observaciones: String!
    personal: Int!
    turno: String!
    fecha: String!
  }

  input NuevoAsistencia {
    cpc:String!
    h_entrada: String!
    h_salida: String!
    observaciones: String!
    personal: Int!
    turno: String!
    fecha: String!
  }

  input NuevoHonorarios {
    horas_t: Int!
    bs_acumulados: Float!
    personal: Int!
    turnos: Int!
  }

  input HonorariosEditable {
    horas_t: Int!
    bs_acumulados: Float!
    personal: Int!
    turnos: Int!
  }


  type Mutation {
    usuarioAdd(usuario: NuevoUsuario): Usuario
    usuarioEdit(usuarioId: Int, usuario: UsuarioEditable): Usuario
    usuarioDelete(usuarioId: Int): Usuario
    personalAdd(personal: NuevoPersonal): Personal
    personalEdit(personalId: Int, personal: PersonalEditable): Personal
    personalDelete(personalId: Int): Personal
    asistenciaAdd(asistencia: NuevoAsistencia): Asistencia
    asistenciaEdit(asistenciaId: Int, asistencia: AsistenciaEditable): Asistencia
    asistenciaDelete(asisteanciaId: Int): Asistencia
    honorariosAdd(honorarios: NuevoHonorarios): Honorarios
    honorariosEdit(honorariosId: Int, honorarios: HonorariosEditable): Honorarios
    honorariosDelete(honorariosId: Int): Honorarios
  }
`
const schema = makeExecutableSchema({
  typeDefs: [rootTypes, Honorarios, Usuario, Personal, Asistencia],
  resolvers
})

module.exports = schema