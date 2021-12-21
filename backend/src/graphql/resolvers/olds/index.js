/* Resolver la consulta */
const mutations = require('./mutations.js')
const queries = require('./queries.js')

module.exports = {
    Query: queries,
    Mutation: mutations
}

