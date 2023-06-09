import gql from 'graphql-tag'

export default gql`
query FilmsByMood {
  allMoods {
    nodes {
      id
      name
      description
      refRecommendationsWMoodsByMoodId {
        nodes {
          recommendationByRecommendationId {
            filmByMediaId {
              id
              posterPath
              title
            }
          }
        }
      }
    }
  }
}
`