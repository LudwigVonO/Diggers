
import gql from 'graphql-tag'

export default gql`
query FilmsByRecommender {
  allUsers {
    nodes {
      firstName
      lastName
      filmsByRecommendationRecommenderIdAndMediaId {
        nodes {
          id
          posterPath
          title
        }
      }
    }
  }
}
`