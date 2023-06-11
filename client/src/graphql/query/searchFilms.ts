import gql from 'graphql-tag'

export default gql`
query searchByTmdbId($search: Int) {
  searchFilms(search: $search) {
		nodes {
      title
    }
  }
}
`