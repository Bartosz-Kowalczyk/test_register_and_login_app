const { gql } = require('apollo-server')

module.exports = gql`
  type Query {
    id: ID!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    firstName: String!
    lastName: String!
    password: String!
    confirmPassword: String!
    email: String!
    dateOfBirth: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
  }
`