import gql from 'graphql-tag'

export default gql`
  query getFilms {
    allFilms {
      nodes {
        title
        tmdbId
        releaseDate
        posterPath
        overview
        originalTitle
        originalLanguage
        nodeId
        links
        id
        genreIds
        firstRecommendedAt
        usersByRecommendationMediaIdAndRecommenderId {
          nodes {
            firstName
            lastName
          }
        }
        recommendationsByMediaId {
          nodes {
            moodsByRefRecommendationsWMoodRecommendationIdAndMoodId {
              nodes {
                name
                id
              }
            }
            userByRecommenderId {
              firstName
              lastName
            }
          }
        }
      }
    }
  }
`