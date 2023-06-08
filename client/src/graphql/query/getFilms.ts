import gql from 'graphql-tag'

export default gql`
  query getFilms {
    allFilms {
      nodes {
        title
        id
        firstRecommendedAt
        links
        nodeId
        overview
        posterLink
        recommendationsByMediaId {
          nodes {
            recommenderId
            moodsByRefRecommendationsWMoodRecommendationIdAndMoodId {
              nodes {
                name
                description
              }
            }
          }
        }
      }
    }
  }
`