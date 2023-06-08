import gql from 'graphql-tag';

export default gql`
  query getUsers {
    allUsers {
      nodes {
        id
        firstName
        lastName
        email
        password
      }
    }
  }
`