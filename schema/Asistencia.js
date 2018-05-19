module.exports = `
  type Asistencia {
    id: ID!
    cpc:String!
    h_entrada: String!
    h_salida: String!
    observaciones: String!
    personal: [Personal]!
    turno: String!
    fecha: String!
  }
`