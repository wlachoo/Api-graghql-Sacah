module.exports = `
  type Usuario {
    id: ID!
    personal: [Personal]!
    password: String
    correo: String!
  }
`