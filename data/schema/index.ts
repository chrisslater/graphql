
import User from './user'

const Query = `
  type Query {
    woot: String
  }
`

const Schema = `
  schema {
    query: Query
  }
`

export default [
  Schema,
  Query,
  User,
]