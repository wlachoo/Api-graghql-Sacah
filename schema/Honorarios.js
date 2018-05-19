module.exports = `
  type Honorarios {
    id: ID!
    horas_t: Int!
    bs_acumulados: Float!
    personal: [Personal]!
    turnos: Int!
  }
`