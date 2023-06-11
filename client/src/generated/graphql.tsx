import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

/** All input for the create `Film` mutation. */
export type CreateFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Film` to be created by this mutation. */
  film: FilmInput;
};

/** The output of our create `Film` mutation. */
export type CreateFilmPayload = {
  __typename?: 'CreateFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Film` that was created by this mutation. */
  film?: Maybe<Film>;
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Film` mutation. */
export type CreateFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/** All input for the create `Mood` mutation. */
export type CreateMoodInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Mood` to be created by this mutation. */
  mood: MoodInput;
};

/** The output of our create `Mood` mutation. */
export type CreateMoodPayload = {
  __typename?: 'CreateMoodPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Mood` that was created by this mutation. */
  mood?: Maybe<Mood>;
  /** An edge for our `Mood`. May be used by Relay 1. */
  moodEdge?: Maybe<MoodsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Mood` mutation. */
export type CreateMoodPayloadMoodEdgeArgs = {
  orderBy?: InputMaybe<Array<MoodsOrderBy>>;
};

/** All input for the create `Recommendation` mutation. */
export type CreateRecommendationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Recommendation` to be created by this mutation. */
  recommendation: RecommendationInput;
};

/** The output of our create `Recommendation` mutation. */
export type CreateRecommendationPayload = {
  __typename?: 'CreateRecommendationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Film` that is related to this `Recommendation`. */
  filmByMediaId?: Maybe<Film>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Recommendation` that was created by this mutation. */
  recommendation?: Maybe<Recommendation>;
  /** An edge for our `Recommendation`. May be used by Relay 1. */
  recommendationEdge?: Maybe<RecommendationsEdge>;
  /** Reads a single `User` that is related to this `Recommendation`. */
  userByRecommenderId?: Maybe<User>;
};


/** The output of our create `Recommendation` mutation. */
export type CreateRecommendationPayloadRecommendationEdgeArgs = {
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};

/** All input for the create `RefRecommendationsWMood` mutation. */
export type CreateRefRecommendationsWMoodInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `RefRecommendationsWMood` to be created by this mutation. */
  refRecommendationsWMood: RefRecommendationsWMoodInput;
};

/** The output of our create `RefRecommendationsWMood` mutation. */
export type CreateRefRecommendationsWMoodPayload = {
  __typename?: 'CreateRefRecommendationsWMoodPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Mood` that is related to this `RefRecommendationsWMood`. */
  moodByMoodId?: Maybe<Mood>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Recommendation` that is related to this `RefRecommendationsWMood`. */
  recommendationByRecommendationId?: Maybe<Recommendation>;
  /** The `RefRecommendationsWMood` that was created by this mutation. */
  refRecommendationsWMood?: Maybe<RefRecommendationsWMood>;
  /** An edge for our `RefRecommendationsWMood`. May be used by Relay 1. */
  refRecommendationsWMoodEdge?: Maybe<RefRecommendationsWMoodsEdge>;
};


/** The output of our create `RefRecommendationsWMood` mutation. */
export type CreateRefRecommendationsWMoodPayloadRefRecommendationsWMoodEdgeArgs = {
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteFilmById` mutation. */
export type DeleteFilmByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the film. */
  id: Scalars['Int']['input'];
};

/** All input for the `deleteFilm` mutation. */
export type DeleteFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Film` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Film` mutation. */
export type DeleteFilmPayload = {
  __typename?: 'DeleteFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedFilmId?: Maybe<Scalars['ID']['output']>;
  /** The `Film` that was deleted by this mutation. */
  film?: Maybe<Film>;
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Film` mutation. */
export type DeleteFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/** All input for the `deleteMoodById` mutation. */
export type DeleteMoodByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the mood. */
  id: Scalars['Int']['input'];
};

/** All input for the `deleteMood` mutation. */
export type DeleteMoodInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Mood` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Mood` mutation. */
export type DeleteMoodPayload = {
  __typename?: 'DeleteMoodPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMoodId?: Maybe<Scalars['ID']['output']>;
  /** The `Mood` that was deleted by this mutation. */
  mood?: Maybe<Mood>;
  /** An edge for our `Mood`. May be used by Relay 1. */
  moodEdge?: Maybe<MoodsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Mood` mutation. */
export type DeleteMoodPayloadMoodEdgeArgs = {
  orderBy?: InputMaybe<Array<MoodsOrderBy>>;
};

/** All input for the `deleteRecommendationById` mutation. */
export type DeleteRecommendationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

/** All input for the `deleteRecommendation` mutation. */
export type DeleteRecommendationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Recommendation` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `Recommendation` mutation. */
export type DeleteRecommendationPayload = {
  __typename?: 'DeleteRecommendationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRecommendationId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Film` that is related to this `Recommendation`. */
  filmByMediaId?: Maybe<Film>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Recommendation` that was deleted by this mutation. */
  recommendation?: Maybe<Recommendation>;
  /** An edge for our `Recommendation`. May be used by Relay 1. */
  recommendationEdge?: Maybe<RecommendationsEdge>;
  /** Reads a single `User` that is related to this `Recommendation`. */
  userByRecommenderId?: Maybe<User>;
};


/** The output of our delete `Recommendation` mutation. */
export type DeleteRecommendationPayloadRecommendationEdgeArgs = {
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};

/** All input for the `deleteRefRecommendationsWMoodById` mutation. */
export type DeleteRefRecommendationsWMoodByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

/** All input for the `deleteRefRecommendationsWMood` mutation. */
export type DeleteRefRecommendationsWMoodInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RefRecommendationsWMood` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `RefRecommendationsWMood` mutation. */
export type DeleteRefRecommendationsWMoodPayload = {
  __typename?: 'DeleteRefRecommendationsWMoodPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRefRecommendationsWMoodId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Mood` that is related to this `RefRecommendationsWMood`. */
  moodByMoodId?: Maybe<Mood>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Recommendation` that is related to this `RefRecommendationsWMood`. */
  recommendationByRecommendationId?: Maybe<Recommendation>;
  /** The `RefRecommendationsWMood` that was deleted by this mutation. */
  refRecommendationsWMood?: Maybe<RefRecommendationsWMood>;
  /** An edge for our `RefRecommendationsWMood`. May be used by Relay 1. */
  refRecommendationsWMoodEdge?: Maybe<RefRecommendationsWMoodsEdge>;
};


/** The output of our delete `RefRecommendationsWMood` mutation. */
export type DeleteRefRecommendationsWMoodPayloadRefRecommendationsWMoodEdgeArgs = {
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the user. */
  id: Scalars['Int']['input'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A recommended film */
export type Film = Node & {
  __typename?: 'Film';
  /** The time this film was first recommended. */
  firstRecommendedAt?: Maybe<Scalars['Datetime']['output']>;
  genreIds: Array<Maybe<Scalars['Int']['output']>>;
  /** The primary unique identifier for the film. */
  id: Scalars['Int']['output'];
  /** The platform links for this film. */
  links: Array<Maybe<Scalars['JSON']['output']>>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  originalLanguage: Scalars['String']['output'];
  originalTitle: Scalars['String']['output'];
  /** A short description of the film. */
  overview?: Maybe<Scalars['String']['output']>;
  /** The link to that film’s poster */
  posterPath?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Recommendation`. */
  recommendationsByMediaId: RecommendationsConnection;
  releaseDate: Scalars['Date']['output'];
  /** The film’s title. */
  title: Scalars['String']['output'];
  tmdbId: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `User`. */
  usersByRecommendationMediaIdAndRecommenderId: FilmUsersByRecommendationMediaIdAndRecommenderIdManyToManyConnection;
};


/** A recommended film */
export type FilmRecommendationsByMediaIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecommendationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};


/** A recommended film */
export type FilmUsersByRecommendationMediaIdAndRecommenderIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** A condition to be used against `Film` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FilmCondition = {
  /** Checks for equality with the object’s `firstRecommendedAt` field. */
  firstRecommendedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `genreIds` field. */
  genreIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `links` field. */
  links?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  /** Checks for equality with the object’s `originalLanguage` field. */
  originalLanguage?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `originalTitle` field. */
  originalTitle?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `overview` field. */
  overview?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `posterPath` field. */
  posterPath?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `releaseDate` field. */
  releaseDate?: InputMaybe<Scalars['Date']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tmdbId` field. */
  tmdbId?: InputMaybe<Scalars['Int']['input']>;
};

/** The fields on `film` to look up the row to connect. */
export type FilmFilmPkeyConnect = {
  /** The primary unique identifier for the film. */
  id: Scalars['Int']['input'];
};

/** The fields on `film` to look up the row to delete. */
export type FilmFilmPkeyDelete = {
  /** The primary unique identifier for the film. */
  id: Scalars['Int']['input'];
};

/** An input for mutations affecting `Film` */
export type FilmInput = {
  /** The time this film was first recommended. */
  firstRecommendedAt?: InputMaybe<Scalars['Datetime']['input']>;
  genreIds: Array<InputMaybe<Scalars['Int']['input']>>;
  /** The primary unique identifier for the film. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The platform links for this film. */
  links: Array<InputMaybe<Scalars['JSON']['input']>>;
  originalLanguage: Scalars['String']['input'];
  originalTitle: Scalars['String']['input'];
  /** A short description of the film. */
  overview?: InputMaybe<Scalars['String']['input']>;
  /** The link to that film’s poster */
  posterPath?: InputMaybe<Scalars['String']['input']>;
  recommendationsUsingId?: InputMaybe<RecommendationMediaIdFkeyInverseInput>;
  releaseDate: Scalars['Date']['input'];
  /** The film’s title. */
  title: Scalars['String']['input'];
  tmdbId: Scalars['Int']['input'];
};

/** The globally unique `ID` look up for the row to connect. */
export type FilmNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `film` to be connected. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to delete. */
export type FilmNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `film` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to update. */
export type FilmOnRecommendationForRecommendationMediaIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `recommendation` to be connected. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `recommendation` being updated. */
  recommendationPatch: RecommendationPatch;
};

/** The fields on `film` to look up the row to update. */
export type FilmOnRecommendationForRecommendationMediaIdFkeyUsingFilmPkeyUpdate = {
  /** An object where the defined keys will be set on the `film` being updated. */
  filmPatch: UpdateFilmOnRecommendationForRecommendationMediaIdFkeyPatch;
  /** The primary unique identifier for the film. */
  id: Scalars['Int']['input'];
};

/** Represents an update to a `Film`. Fields that are set will be updated. */
export type FilmPatch = {
  /** The time this film was first recommended. */
  firstRecommendedAt?: InputMaybe<Scalars['Datetime']['input']>;
  genreIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The primary unique identifier for the film. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The platform links for this film. */
  links?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  originalLanguage?: InputMaybe<Scalars['String']['input']>;
  originalTitle?: InputMaybe<Scalars['String']['input']>;
  /** A short description of the film. */
  overview?: InputMaybe<Scalars['String']['input']>;
  /** The link to that film’s poster */
  posterPath?: InputMaybe<Scalars['String']['input']>;
  recommendationsUsingId?: InputMaybe<RecommendationMediaIdFkeyInverseInput>;
  releaseDate?: InputMaybe<Scalars['Date']['input']>;
  /** The film’s title. */
  title?: InputMaybe<Scalars['String']['input']>;
  tmdbId?: InputMaybe<Scalars['Int']['input']>;
};

/** A connection to a list of `User` values, with data from `Recommendation`. */
export type FilmUsersByRecommendationMediaIdAndRecommenderIdManyToManyConnection = {
  __typename?: 'FilmUsersByRecommendationMediaIdAndRecommenderIdManyToManyConnection';
  /** A list of edges which contains the `User`, info from the `Recommendation`, and the cursor to aid in pagination. */
  edges: Array<FilmUsersByRecommendationMediaIdAndRecommenderIdManyToManyEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection, with data from `Recommendation`. */
export type FilmUsersByRecommendationMediaIdAndRecommenderIdManyToManyEdge = {
  __typename?: 'FilmUsersByRecommendationMediaIdAndRecommenderIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
  /** Reads and enables pagination through a set of `Recommendation`. */
  recommendationsByRecommenderId: RecommendationsConnection;
};


/** A `User` edge in the connection, with data from `Recommendation`. */
export type FilmUsersByRecommendationMediaIdAndRecommenderIdManyToManyEdgeRecommendationsByRecommenderIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecommendationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};

/** A connection to a list of `Film` values. */
export type FilmsConnection = {
  __typename?: 'FilmsConnection';
  /** A list of edges which contains the `Film` and cursor to aid in pagination. */
  edges: Array<FilmsEdge>;
  /** A list of `Film` objects. */
  nodes: Array<Maybe<Film>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Film` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Film` edge in the connection. */
export type FilmsEdge = {
  __typename?: 'FilmsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Film` at the end of the edge. */
  node?: Maybe<Film>;
};

/** Methods to use when ordering `Film`. */
export enum FilmsOrderBy {
  FirstRecommendedAtAsc = 'FIRST_RECOMMENDED_AT_ASC',
  FirstRecommendedAtDesc = 'FIRST_RECOMMENDED_AT_DESC',
  GenreIdsAsc = 'GENRE_IDS_ASC',
  GenreIdsDesc = 'GENRE_IDS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LinksAsc = 'LINKS_ASC',
  LinksDesc = 'LINKS_DESC',
  Natural = 'NATURAL',
  OriginalLanguageAsc = 'ORIGINAL_LANGUAGE_ASC',
  OriginalLanguageDesc = 'ORIGINAL_LANGUAGE_DESC',
  OriginalTitleAsc = 'ORIGINAL_TITLE_ASC',
  OriginalTitleDesc = 'ORIGINAL_TITLE_DESC',
  OverviewAsc = 'OVERVIEW_ASC',
  OverviewDesc = 'OVERVIEW_DESC',
  PosterPathAsc = 'POSTER_PATH_ASC',
  PosterPathDesc = 'POSTER_PATH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ReleaseDateAsc = 'RELEASE_DATE_ASC',
  ReleaseDateDesc = 'RELEASE_DATE_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  TmdbIdAsc = 'TMDB_ID_ASC',
  TmdbIdDesc = 'TMDB_ID_DESC'
}

/** One of the recommendation moods */
export type Mood = Node & {
  __typename?: 'Mood';
  /** The time this mood was created. */
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  /** A longer description of what a mood means. */
  description: Scalars['String']['output'];
  /** The primary unique identifier for the mood. */
  id: Scalars['Int']['output'];
  /** The name given to the mood. */
  name: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads and enables pagination through a set of `Recommendation`. */
  recommendationsByRefRecommendationsWMoodMoodIdAndRecommendationId: MoodRecommendationsByRefRecommendationsWMoodMoodIdAndRecommendationIdManyToManyConnection;
  /** Reads and enables pagination through a set of `RefRecommendationsWMood`. */
  refRecommendationsWMoodsByMoodId: RefRecommendationsWMoodsConnection;
};


/** One of the recommendation moods */
export type MoodRecommendationsByRefRecommendationsWMoodMoodIdAndRecommendationIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecommendationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};


/** One of the recommendation moods */
export type MoodRefRecommendationsWMoodsByMoodIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RefRecommendationsWMoodCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};

/** A condition to be used against `Mood` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MoodCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Mood` */
export type MoodInput = {
  /** The time this mood was created. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** A longer description of what a mood means. */
  description: Scalars['String']['input'];
  /** The primary unique identifier for the mood. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The name given to the mood. */
  name: Scalars['String']['input'];
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInverseInput>;
};

/** The fields on `mood` to look up the row to connect. */
export type MoodMoodPkeyConnect = {
  /** The primary unique identifier for the mood. */
  id: Scalars['Int']['input'];
};

/** The fields on `mood` to look up the row to delete. */
export type MoodMoodPkeyDelete = {
  /** The primary unique identifier for the mood. */
  id: Scalars['Int']['input'];
};

/** The globally unique `ID` look up for the row to connect. */
export type MoodNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `mood` to be connected. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to delete. */
export type MoodNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `mood` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to update. */
export type MoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `refRecommendationsWMood` to be connected. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `refRecommendationsWMood` being updated. */
  refRecommendationsWMoodPatch: RefRecommendationsWMoodPatch;
};

/** The fields on `mood` to look up the row to update. */
export type MoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyUsingMoodPkeyUpdate = {
  /** The primary unique identifier for the mood. */
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `mood` being updated. */
  moodPatch: UpdateMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyPatch;
};

/** Represents an update to a `Mood`. Fields that are set will be updated. */
export type MoodPatch = {
  /** The time this mood was created. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** A longer description of what a mood means. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the mood. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The name given to the mood. */
  name?: InputMaybe<Scalars['String']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInverseInput>;
};

/** A connection to a list of `Recommendation` values, with data from `RefRecommendationsWMood`. */
export type MoodRecommendationsByRefRecommendationsWMoodMoodIdAndRecommendationIdManyToManyConnection = {
  __typename?: 'MoodRecommendationsByRefRecommendationsWMoodMoodIdAndRecommendationIdManyToManyConnection';
  /** A list of edges which contains the `Recommendation`, info from the `RefRecommendationsWMood`, and the cursor to aid in pagination. */
  edges: Array<MoodRecommendationsByRefRecommendationsWMoodMoodIdAndRecommendationIdManyToManyEdge>;
  /** A list of `Recommendation` objects. */
  nodes: Array<Maybe<Recommendation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Recommendation` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Recommendation` edge in the connection, with data from `RefRecommendationsWMood`. */
export type MoodRecommendationsByRefRecommendationsWMoodMoodIdAndRecommendationIdManyToManyEdge = {
  __typename?: 'MoodRecommendationsByRefRecommendationsWMoodMoodIdAndRecommendationIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Recommendation` at the end of the edge. */
  node?: Maybe<Recommendation>;
  /** Reads and enables pagination through a set of `RefRecommendationsWMood`. */
  refRecommendationsWMoodsByRecommendationId: RefRecommendationsWMoodsConnection;
};


/** A `Recommendation` edge in the connection, with data from `RefRecommendationsWMood`. */
export type MoodRecommendationsByRefRecommendationsWMoodMoodIdAndRecommendationIdManyToManyEdgeRefRecommendationsWMoodsByRecommendationIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RefRecommendationsWMoodCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};

/** A connection to a list of `Mood` values. */
export type MoodsConnection = {
  __typename?: 'MoodsConnection';
  /** A list of edges which contains the `Mood` and cursor to aid in pagination. */
  edges: Array<MoodsEdge>;
  /** A list of `Mood` objects. */
  nodes: Array<Maybe<Mood>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Mood` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Mood` edge in the connection. */
export type MoodsEdge = {
  __typename?: 'MoodsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Mood` at the end of the edge. */
  node?: Maybe<Mood>;
};

/** Methods to use when ordering `Mood`. */
export enum MoodsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Film`. */
  createFilm?: Maybe<CreateFilmPayload>;
  /** Creates a single `Mood`. */
  createMood?: Maybe<CreateMoodPayload>;
  /** Creates a single `Recommendation`. */
  createRecommendation?: Maybe<CreateRecommendationPayload>;
  /** Creates a single `RefRecommendationsWMood`. */
  createRefRecommendationsWMood?: Maybe<CreateRefRecommendationsWMoodPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Film` using its globally unique id. */
  deleteFilm?: Maybe<DeleteFilmPayload>;
  /** Deletes a single `Film` using a unique key. */
  deleteFilmById?: Maybe<DeleteFilmPayload>;
  /** Deletes a single `Mood` using its globally unique id. */
  deleteMood?: Maybe<DeleteMoodPayload>;
  /** Deletes a single `Mood` using a unique key. */
  deleteMoodById?: Maybe<DeleteMoodPayload>;
  /** Deletes a single `Recommendation` using its globally unique id. */
  deleteRecommendation?: Maybe<DeleteRecommendationPayload>;
  /** Deletes a single `Recommendation` using a unique key. */
  deleteRecommendationById?: Maybe<DeleteRecommendationPayload>;
  /** Deletes a single `RefRecommendationsWMood` using its globally unique id. */
  deleteRefRecommendationsWMood?: Maybe<DeleteRefRecommendationsWMoodPayload>;
  /** Deletes a single `RefRecommendationsWMood` using a unique key. */
  deleteRefRecommendationsWMoodById?: Maybe<DeleteRefRecommendationsWMoodPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /** Updates a single `Film` using its globally unique id and a patch. */
  updateFilm?: Maybe<UpdateFilmPayload>;
  /** Updates a single `Film` using a unique key and a patch. */
  updateFilmById?: Maybe<UpdateFilmPayload>;
  /** Updates a single `Mood` using its globally unique id and a patch. */
  updateMood?: Maybe<UpdateMoodPayload>;
  /** Updates a single `Mood` using a unique key and a patch. */
  updateMoodById?: Maybe<UpdateMoodPayload>;
  /** Updates a single `Recommendation` using its globally unique id and a patch. */
  updateRecommendation?: Maybe<UpdateRecommendationPayload>;
  /** Updates a single `Recommendation` using a unique key and a patch. */
  updateRecommendationById?: Maybe<UpdateRecommendationPayload>;
  /** Updates a single `RefRecommendationsWMood` using its globally unique id and a patch. */
  updateRefRecommendationsWMood?: Maybe<UpdateRefRecommendationsWMoodPayload>;
  /** Updates a single `RefRecommendationsWMood` using a unique key and a patch. */
  updateRefRecommendationsWMoodById?: Maybe<UpdateRefRecommendationsWMoodPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
  /** Upserts a single `Film`. */
  upsertFilm?: Maybe<UpsertFilmPayload>;
  /** Upserts a single `Mood`. */
  upsertMood?: Maybe<UpsertMoodPayload>;
  /** Upserts a single `Recommendation`. */
  upsertRecommendation?: Maybe<UpsertRecommendationPayload>;
  /** Upserts a single `RefRecommendationsWMood`. */
  upsertRefRecommendationsWMood?: Maybe<UpsertRefRecommendationsWMoodPayload>;
  /** Upserts a single `User`. */
  upsertUser?: Maybe<UpsertUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmArgs = {
  input: CreateFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMoodArgs = {
  input: CreateMoodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRecommendationArgs = {
  input: CreateRecommendationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRefRecommendationsWMoodArgs = {
  input: CreateRefRecommendationsWMoodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmArgs = {
  input: DeleteFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmByIdArgs = {
  input: DeleteFilmByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMoodArgs = {
  input: DeleteMoodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMoodByIdArgs = {
  input: DeleteMoodByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRecommendationArgs = {
  input: DeleteRecommendationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRecommendationByIdArgs = {
  input: DeleteRecommendationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRefRecommendationsWMoodArgs = {
  input: DeleteRefRecommendationsWMoodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRefRecommendationsWMoodByIdArgs = {
  input: DeleteRefRecommendationsWMoodByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmArgs = {
  input: UpdateFilmInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmByIdArgs = {
  input: UpdateFilmByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMoodArgs = {
  input: UpdateMoodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMoodByIdArgs = {
  input: UpdateMoodByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRecommendationArgs = {
  input: UpdateRecommendationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRecommendationByIdArgs = {
  input: UpdateRecommendationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRefRecommendationsWMoodArgs = {
  input: UpdateRefRecommendationsWMoodInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRefRecommendationsWMoodByIdArgs = {
  input: UpdateRefRecommendationsWMoodByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertFilmArgs = {
  input: UpsertFilmInput;
  where: UpsertFilmWhere;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertMoodArgs = {
  input: UpsertMoodInput;
  where: UpsertMoodWhere;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertRecommendationArgs = {
  input: UpsertRecommendationInput;
  where: UpsertRecommendationWhere;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertRefRecommendationsWMoodArgs = {
  input: UpsertRefRecommendationsWMoodInput;
  where: UpsertRefRecommendationsWMoodWhere;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpsertUserArgs = {
  input: UpsertUserInput;
  where: UpsertUserWhere;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Film`. */
  allFilms?: Maybe<FilmsConnection>;
  /** Reads and enables pagination through a set of `Mood`. */
  allMoods?: Maybe<MoodsConnection>;
  /** Reads and enables pagination through a set of `Recommendation`. */
  allRecommendations?: Maybe<RecommendationsConnection>;
  /** Reads and enables pagination through a set of `RefRecommendationsWMood`. */
  allRefRecommendationsWMoods?: Maybe<RefRecommendationsWMoodsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a single `Film` using its globally unique `ID`. */
  film?: Maybe<Film>;
  filmById?: Maybe<Film>;
  /** Reads a single `Mood` using its globally unique `ID`. */
  mood?: Maybe<Mood>;
  moodById?: Maybe<Mood>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Recommendation` using its globally unique `ID`. */
  recommendation?: Maybe<Recommendation>;
  recommendationById?: Maybe<Recommendation>;
  /** Reads a single `RefRecommendationsWMood` using its globally unique `ID`. */
  refRecommendationsWMood?: Maybe<RefRecommendationsWMood>;
  refRecommendationsWMoodById?: Maybe<RefRecommendationsWMood>;
  /** Reads and enables pagination through a set of `Film`. */
  searchFilms?: Maybe<FilmsConnection>;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userById?: Maybe<User>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFilmsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMoodsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MoodCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MoodsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRecommendationsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecommendationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRefRecommendationsWMoodsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RefRecommendationsWMoodCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFilmByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMoodArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMoodByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRecommendationArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRecommendationByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRefRecommendationsWMoodArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRefRecommendationsWMoodByIdArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchFilmsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['Int']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['Int']['input'];
};

export type Recommendation = Node & {
  __typename?: 'Recommendation';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  /** Reads a single `Film` that is related to this `Recommendation`. */
  filmByMediaId?: Maybe<Film>;
  id: Scalars['Int']['output'];
  mediaId: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `Mood`. */
  moods: MoodsConnection;
  /** Reads and enables pagination through a set of `Mood`. */
  moodsByRefRecommendationsWMoodRecommendationIdAndMoodId: RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyConnection;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  recommenderId: Scalars['Int']['output'];
  /** Reads and enables pagination through a set of `RefRecommendationsWMood`. */
  refRecommendationsWMoodsByRecommendationId: RefRecommendationsWMoodsConnection;
  review?: Maybe<Scalars['String']['output']>;
  /** Reads a single `User` that is related to this `Recommendation`. */
  userByRecommenderId?: Maybe<User>;
};


export type RecommendationMoodsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MoodCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MoodsOrderBy>>;
};


export type RecommendationRefRecommendationsWMoodsByRecommendationIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RefRecommendationsWMoodCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};

/**
 * A condition to be used against `Recommendation` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RecommendationCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `mediaId` field. */
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `recommenderId` field. */
  recommenderId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `review` field. */
  review?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Recommendation` */
export type RecommendationInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  filmToMediaId?: InputMaybe<RecommendationMediaIdFkeyInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  recommenderId?: InputMaybe<Scalars['Int']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInverseInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  userToRecommenderId?: InputMaybe<RecommendationRecommenderIdFkeyInput>;
};

/** The `film` to be created by this mutation. */
export type RecommendationMediaIdFkeyFilmCreateInput = {
  /** The time this film was first recommended. */
  firstRecommendedAt?: InputMaybe<Scalars['Datetime']['input']>;
  genreIds: Array<InputMaybe<Scalars['Int']['input']>>;
  /** The primary unique identifier for the film. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The platform links for this film. */
  links: Array<InputMaybe<Scalars['JSON']['input']>>;
  originalLanguage: Scalars['String']['input'];
  originalTitle: Scalars['String']['input'];
  /** A short description of the film. */
  overview?: InputMaybe<Scalars['String']['input']>;
  /** The link to that film’s poster */
  posterPath?: InputMaybe<Scalars['String']['input']>;
  recommendationsUsingId?: InputMaybe<RecommendationMediaIdFkeyInverseInput>;
  releaseDate: Scalars['Date']['input'];
  /** The film’s title. */
  title: Scalars['String']['input'];
  tmdbId: Scalars['Int']['input'];
};

/** Input for the nested mutation of `film` in the `RecommendationInput` mutation. */
export type RecommendationMediaIdFkeyInput = {
  /** The primary key(s) for `film` for the far side of the relationship. */
  connectById?: InputMaybe<FilmFilmPkeyConnect>;
  /** The primary key(s) for `film` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<FilmNodeIdConnect>;
  /** A `FilmInput` object that will be created and connected to this object. */
  create?: InputMaybe<RecommendationMediaIdFkeyFilmCreateInput>;
  /** The primary key(s) for `film` for the far side of the relationship. */
  deleteById?: InputMaybe<FilmFilmPkeyDelete>;
  /** The primary key(s) for `film` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<FilmNodeIdDelete>;
  /** The primary key(s) and patch data for `film` for the far side of the relationship. */
  updateById?: InputMaybe<FilmOnRecommendationForRecommendationMediaIdFkeyUsingFilmPkeyUpdate>;
  /** The primary key(s) and patch data for `film` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<RecommendationOnRecommendationForRecommendationMediaIdFkeyNodeIdUpdate>;
};

/** Input for the nested mutation of `recommendation` in the `FilmInput` mutation. */
export type RecommendationMediaIdFkeyInverseInput = {
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  connectById?: InputMaybe<Array<RecommendationRecommendationPkeyConnect>>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<RecommendationNodeIdConnect>>;
  /** A `RecommendationInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<RecommendationMediaIdFkeyRecommendationCreateInput>>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<RecommendationRecommendationPkeyDelete>>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<RecommendationNodeIdDelete>>;
  /** Flag indicating whether all other `recommendation` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `recommendation` for the far side of the relationship. */
  updateById?: InputMaybe<Array<RecommendationOnRecommendationForRecommendationMediaIdFkeyUsingRecommendationPkeyUpdate>>;
  /** The primary key(s) and patch data for `recommendation` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<FilmOnRecommendationForRecommendationMediaIdFkeyNodeIdUpdate>>;
};

/** The `recommendation` to be created by this mutation. */
export type RecommendationMediaIdFkeyRecommendationCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  filmToMediaId?: InputMaybe<RecommendationMediaIdFkeyInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  recommenderId?: InputMaybe<Scalars['Int']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInverseInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  userToRecommenderId?: InputMaybe<RecommendationRecommenderIdFkeyInput>;
};

/** A connection to a list of `Mood` values, with data from `RefRecommendationsWMood`. */
export type RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyConnection = {
  __typename?: 'RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyConnection';
  /** A list of edges which contains the `Mood`, info from the `RefRecommendationsWMood`, and the cursor to aid in pagination. */
  edges: Array<RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyEdge>;
  /** A list of `Mood` objects. */
  nodes: Array<Maybe<Mood>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Mood` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Mood` edge in the connection, with data from `RefRecommendationsWMood`. */
export type RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyEdge = {
  __typename?: 'RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Mood` at the end of the edge. */
  node?: Maybe<Mood>;
  /** Reads and enables pagination through a set of `RefRecommendationsWMood`. */
  refRecommendationsWMoodsByMoodId: RefRecommendationsWMoodsConnection;
};


/** A `Mood` edge in the connection, with data from `RefRecommendationsWMood`. */
export type RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyEdgeRefRecommendationsWMoodsByMoodIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RefRecommendationsWMoodCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};

/** The globally unique `ID` look up for the row to connect. */
export type RecommendationNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `recommendation` to be connected. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to delete. */
export type RecommendationNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `recommendation` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to update. */
export type RecommendationOnRecommendationForRecommendationMediaIdFkeyNodeIdUpdate = {
  /** An object where the defined keys will be set on the `film` being updated. */
  filmPatch: FilmPatch;
  /** The globally unique `ID` which identifies a single `film` to be connected. */
  nodeId: Scalars['ID']['input'];
};

/** The fields on `recommendation` to look up the row to update. */
export type RecommendationOnRecommendationForRecommendationMediaIdFkeyUsingRecommendationPkeyUpdate = {
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `recommendation` being updated. */
  recommendationPatch: UpdateRecommendationOnRecommendationForRecommendationMediaIdFkeyPatch;
};

/** The globally unique `ID` look up for the row to update. */
export type RecommendationOnRecommendationForRecommendationRecommenderIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `user` to be connected. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  userPatch: UserPatch;
};

/** The fields on `recommendation` to look up the row to update. */
export type RecommendationOnRecommendationForRecommendationRecommenderIdFkeyUsingRecommendationPkeyUpdate = {
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `recommendation` being updated. */
  recommendationPatch: UpdateRecommendationOnRecommendationForRecommendationRecommenderIdFkeyPatch;
};

/** The globally unique `ID` look up for the row to update. */
export type RecommendationOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `refRecommendationsWMood` to be connected. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `refRecommendationsWMood` being updated. */
  refRecommendationsWMoodPatch: RefRecommendationsWMoodPatch;
};

/** The fields on `recommendation` to look up the row to update. */
export type RecommendationOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyUsingRecommendationPkeyUpdate = {
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `recommendation` being updated. */
  recommendationPatch: UpdateRecommendationOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyPatch;
};

/** Represents an update to a `Recommendation`. Fields that are set will be updated. */
export type RecommendationPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  filmToMediaId?: InputMaybe<RecommendationMediaIdFkeyInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  recommenderId?: InputMaybe<Scalars['Int']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInverseInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  userToRecommenderId?: InputMaybe<RecommendationRecommenderIdFkeyInput>;
};

/** The fields on `recommendation` to look up the row to connect. */
export type RecommendationRecommendationPkeyConnect = {
  id: Scalars['Int']['input'];
};

/** The fields on `recommendation` to look up the row to delete. */
export type RecommendationRecommendationPkeyDelete = {
  id: Scalars['Int']['input'];
};

/** Input for the nested mutation of `user` in the `RecommendationInput` mutation. */
export type RecommendationRecommenderIdFkeyInput = {
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectById?: InputMaybe<UserUserPkeyConnect>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<UserNodeIdConnect>;
  /** A `UserInput` object that will be created and connected to this object. */
  create?: InputMaybe<RecommendationRecommenderIdFkeyUserCreateInput>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteById?: InputMaybe<UserUserPkeyDelete>;
  /** The primary key(s) for `user` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<UserNodeIdDelete>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateById?: InputMaybe<UserOnRecommendationForRecommendationRecommenderIdFkeyUsingUserPkeyUpdate>;
  /** The primary key(s) and patch data for `user` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<RecommendationOnRecommendationForRecommendationRecommenderIdFkeyNodeIdUpdate>;
};

/** Input for the nested mutation of `recommendation` in the `UserInput` mutation. */
export type RecommendationRecommenderIdFkeyInverseInput = {
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  connectById?: InputMaybe<Array<RecommendationRecommendationPkeyConnect>>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<RecommendationNodeIdConnect>>;
  /** A `RecommendationInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<RecommendationRecommenderIdFkeyRecommendationCreateInput>>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<RecommendationRecommendationPkeyDelete>>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<RecommendationNodeIdDelete>>;
  /** Flag indicating whether all other `recommendation` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `recommendation` for the far side of the relationship. */
  updateById?: InputMaybe<Array<RecommendationOnRecommendationForRecommendationRecommenderIdFkeyUsingRecommendationPkeyUpdate>>;
  /** The primary key(s) and patch data for `recommendation` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<UserOnRecommendationForRecommendationRecommenderIdFkeyNodeIdUpdate>>;
};

/** The `recommendation` to be created by this mutation. */
export type RecommendationRecommenderIdFkeyRecommendationCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  filmToMediaId?: InputMaybe<RecommendationMediaIdFkeyInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInverseInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  userToRecommenderId?: InputMaybe<RecommendationRecommenderIdFkeyInput>;
};

/** The `user` to be created by this mutation. */
export type RecommendationRecommenderIdFkeyUserCreateInput = {
  /** The time this person was created. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** The user’s email  . */
  email: Scalars['String']['input'];
  /** The user’s first name. */
  firstName: Scalars['String']['input'];
  /** The primary unique identifier for the user. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The user’s last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  recommendationsUsingId?: InputMaybe<RecommendationRecommenderIdFkeyInverseInput>;
};

/** A connection to a list of `Recommendation` values. */
export type RecommendationsConnection = {
  __typename?: 'RecommendationsConnection';
  /** A list of edges which contains the `Recommendation` and cursor to aid in pagination. */
  edges: Array<RecommendationsEdge>;
  /** A list of `Recommendation` objects. */
  nodes: Array<Maybe<Recommendation>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Recommendation` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Recommendation` edge in the connection. */
export type RecommendationsEdge = {
  __typename?: 'RecommendationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Recommendation` at the end of the edge. */
  node?: Maybe<Recommendation>;
};

/** Methods to use when ordering `Recommendation`. */
export enum RecommendationsOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MediaIdAsc = 'MEDIA_ID_ASC',
  MediaIdDesc = 'MEDIA_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RatingAsc = 'RATING_ASC',
  RatingDesc = 'RATING_DESC',
  RecommenderIdAsc = 'RECOMMENDER_ID_ASC',
  RecommenderIdDesc = 'RECOMMENDER_ID_DESC',
  ReviewAsc = 'REVIEW_ASC',
  ReviewDesc = 'REVIEW_DESC'
}

export type RefRecommendationsWMood = Node & {
  __typename?: 'RefRecommendationsWMood';
  id: Scalars['Int']['output'];
  /** Reads a single `Mood` that is related to this `RefRecommendationsWMood`. */
  moodByMoodId?: Maybe<Mood>;
  moodId: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Recommendation` that is related to this `RefRecommendationsWMood`. */
  recommendationByRecommendationId?: Maybe<Recommendation>;
  recommendationId: Scalars['Int']['output'];
};

/**
 * A condition to be used against `RefRecommendationsWMood` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type RefRecommendationsWMoodCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `moodId` field. */
  moodId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `recommendationId` field. */
  recommendationId?: InputMaybe<Scalars['Int']['input']>;
};

/** An input for mutations affecting `RefRecommendationsWMood` */
export type RefRecommendationsWMoodInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  moodId?: InputMaybe<Scalars['Int']['input']>;
  moodToMoodId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInput>;
  recommendationId?: InputMaybe<Scalars['Int']['input']>;
  recommendationToRecommendationId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type RefRecommendationsWMoodNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `refRecommendationsWMood` to be connected. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to delete. */
export type RefRecommendationsWMoodNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `refRecommendationsWMood` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to update. */
export type RefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyNodeIdUpdate = {
  /** An object where the defined keys will be set on the `mood` being updated. */
  moodPatch: MoodPatch;
  /** The globally unique `ID` which identifies a single `mood` to be connected. */
  nodeId: Scalars['ID']['input'];
};

/** The fields on `refRecommendationsWMood` to look up the row to update. */
export type RefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyUsingRefRecommendationsWMoodsPkeyUpdate = {
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `refRecommendationsWMood` being updated. */
  refRecommendationsWMoodPatch: UpdateRefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyPatch;
};

/** The globally unique `ID` look up for the row to update. */
export type RefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `recommendation` to be connected. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `recommendation` being updated. */
  recommendationPatch: RecommendationPatch;
};

/** The fields on `refRecommendationsWMood` to look up the row to update. */
export type RefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyUsingRefRecommendationsWMoodsPkeyUpdate = {
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `refRecommendationsWMood` being updated. */
  refRecommendationsWMoodPatch: UpdateRefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyPatch;
};

/** Represents an update to a `RefRecommendationsWMood`. Fields that are set will be updated. */
export type RefRecommendationsWMoodPatch = {
  id?: InputMaybe<Scalars['Int']['input']>;
  moodId?: InputMaybe<Scalars['Int']['input']>;
  moodToMoodId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInput>;
  recommendationId?: InputMaybe<Scalars['Int']['input']>;
  recommendationToRecommendationId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInput>;
};

/** The fields on `refRecommendationsWMood` to look up the row to connect. */
export type RefRecommendationsWMoodRefRecommendationsWMoodsPkeyConnect = {
  id: Scalars['Int']['input'];
};

/** The fields on `refRecommendationsWMood` to look up the row to delete. */
export type RefRecommendationsWMoodRefRecommendationsWMoodsPkeyDelete = {
  id: Scalars['Int']['input'];
};

/** A connection to a list of `RefRecommendationsWMood` values. */
export type RefRecommendationsWMoodsConnection = {
  __typename?: 'RefRecommendationsWMoodsConnection';
  /** A list of edges which contains the `RefRecommendationsWMood` and cursor to aid in pagination. */
  edges: Array<RefRecommendationsWMoodsEdge>;
  /** A list of `RefRecommendationsWMood` objects. */
  nodes: Array<Maybe<RefRecommendationsWMood>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `RefRecommendationsWMood` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `RefRecommendationsWMood` edge in the connection. */
export type RefRecommendationsWMoodsEdge = {
  __typename?: 'RefRecommendationsWMoodsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `RefRecommendationsWMood` at the end of the edge. */
  node?: Maybe<RefRecommendationsWMood>;
};

/** Input for the nested mutation of `mood` in the `RefRecommendationsWMoodInput` mutation. */
export type RefRecommendationsWMoodsMoodIdFkeyInput = {
  /** The primary key(s) for `mood` for the far side of the relationship. */
  connectById?: InputMaybe<MoodMoodPkeyConnect>;
  /** The primary key(s) for `mood` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<MoodNodeIdConnect>;
  /** A `MoodInput` object that will be created and connected to this object. */
  create?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyMoodCreateInput>;
  /** The primary key(s) for `mood` for the far side of the relationship. */
  deleteById?: InputMaybe<MoodMoodPkeyDelete>;
  /** The primary key(s) for `mood` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<MoodNodeIdDelete>;
  /** The primary key(s) and patch data for `mood` for the far side of the relationship. */
  updateById?: InputMaybe<MoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyUsingMoodPkeyUpdate>;
  /** The primary key(s) and patch data for `mood` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<RefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyNodeIdUpdate>;
};

/** Input for the nested mutation of `refRecommendationsWMood` in the `MoodInput` mutation. */
export type RefRecommendationsWMoodsMoodIdFkeyInverseInput = {
  /** The primary key(s) for `refRecommendationsWMood` for the far side of the relationship. */
  connectById?: InputMaybe<Array<RefRecommendationsWMoodRefRecommendationsWMoodsPkeyConnect>>;
  /** The primary key(s) for `refRecommendationsWMood` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<RefRecommendationsWMoodNodeIdConnect>>;
  /** A `RefRecommendationsWMoodInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<RefRecommendationsWMoodsMoodIdFkeyRefRecommendationsWMoodsCreateInput>>;
  /** The primary key(s) for `refRecommendationsWMood` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<RefRecommendationsWMoodRefRecommendationsWMoodsPkeyDelete>>;
  /** The primary key(s) for `refRecommendationsWMood` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<RefRecommendationsWMoodNodeIdDelete>>;
  /** Flag indicating whether all other `refRecommendationsWMood` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `refRecommendationsWMood` for the far side of the relationship. */
  updateById?: InputMaybe<Array<RefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyUsingRefRecommendationsWMoodsPkeyUpdate>>;
  /** The primary key(s) and patch data for `refRecommendationsWMood` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<MoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyNodeIdUpdate>>;
};

/** The `mood` to be created by this mutation. */
export type RefRecommendationsWMoodsMoodIdFkeyMoodCreateInput = {
  /** The time this mood was created. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** A longer description of what a mood means. */
  description: Scalars['String']['input'];
  /** The primary unique identifier for the mood. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The name given to the mood. */
  name: Scalars['String']['input'];
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInverseInput>;
};

/** The `refRecommendationsWMood` to be created by this mutation. */
export type RefRecommendationsWMoodsMoodIdFkeyRefRecommendationsWMoodsCreateInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  moodToMoodId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInput>;
  recommendationId?: InputMaybe<Scalars['Int']['input']>;
  recommendationToRecommendationId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInput>;
};

/** Methods to use when ordering `RefRecommendationsWMood`. */
export enum RefRecommendationsWMoodsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MoodIdAsc = 'MOOD_ID_ASC',
  MoodIdDesc = 'MOOD_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RecommendationIdAsc = 'RECOMMENDATION_ID_ASC',
  RecommendationIdDesc = 'RECOMMENDATION_ID_DESC'
}

/** Input for the nested mutation of `recommendation` in the `RefRecommendationsWMoodInput` mutation. */
export type RefRecommendationsWMoodsRecommendationIdFkeyInput = {
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  connectById?: InputMaybe<RecommendationRecommendationPkeyConnect>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<RecommendationNodeIdConnect>;
  /** A `RecommendationInput` object that will be created and connected to this object. */
  create?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyRecommendationCreateInput>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  deleteById?: InputMaybe<RecommendationRecommendationPkeyDelete>;
  /** The primary key(s) for `recommendation` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<RecommendationNodeIdDelete>;
  /** The primary key(s) and patch data for `recommendation` for the far side of the relationship. */
  updateById?: InputMaybe<RecommendationOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyUsingRecommendationPkeyUpdate>;
  /** The primary key(s) and patch data for `recommendation` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<RefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyNodeIdUpdate>;
};

/** Input for the nested mutation of `refRecommendationsWMood` in the `RecommendationInput` mutation. */
export type RefRecommendationsWMoodsRecommendationIdFkeyInverseInput = {
  /** The primary key(s) for `refRecommendationsWMood` for the far side of the relationship. */
  connectById?: InputMaybe<Array<RefRecommendationsWMoodRefRecommendationsWMoodsPkeyConnect>>;
  /** The primary key(s) for `refRecommendationsWMood` for the far side of the relationship. */
  connectByNodeId?: InputMaybe<Array<RefRecommendationsWMoodNodeIdConnect>>;
  /** A `RefRecommendationsWMoodInput` object that will be created and connected to this object. */
  create?: InputMaybe<Array<RefRecommendationsWMoodsRecommendationIdFkeyRefRecommendationsWMoodsCreateInput>>;
  /** The primary key(s) for `refRecommendationsWMood` for the far side of the relationship. */
  deleteById?: InputMaybe<Array<RefRecommendationsWMoodRefRecommendationsWMoodsPkeyDelete>>;
  /** The primary key(s) for `refRecommendationsWMood` for the far side of the relationship. */
  deleteByNodeId?: InputMaybe<Array<RefRecommendationsWMoodNodeIdDelete>>;
  /** Flag indicating whether all other `refRecommendationsWMood` records that match this relationship should be removed. */
  deleteOthers?: InputMaybe<Scalars['Boolean']['input']>;
  /** The primary key(s) and patch data for `refRecommendationsWMood` for the far side of the relationship. */
  updateById?: InputMaybe<Array<RefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyUsingRefRecommendationsWMoodsPkeyUpdate>>;
  /** The primary key(s) and patch data for `refRecommendationsWMood` for the far side of the relationship. */
  updateByNodeId?: InputMaybe<Array<RecommendationOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyNodeIdUpdate>>;
};

/** The `recommendation` to be created by this mutation. */
export type RefRecommendationsWMoodsRecommendationIdFkeyRecommendationCreateInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  filmToMediaId?: InputMaybe<RecommendationMediaIdFkeyInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  recommenderId?: InputMaybe<Scalars['Int']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInverseInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  userToRecommenderId?: InputMaybe<RecommendationRecommenderIdFkeyInput>;
};

/** The `refRecommendationsWMood` to be created by this mutation. */
export type RefRecommendationsWMoodsRecommendationIdFkeyRefRecommendationsWMoodsCreateInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  moodId?: InputMaybe<Scalars['Int']['input']>;
  moodToMoodId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInput>;
  recommendationToRecommendationId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInput>;
};

/** All input for the `updateFilmById` mutation. */
export type UpdateFilmByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Film` being updated. */
  filmPatch: FilmPatch;
  /** The primary unique identifier for the film. */
  id: Scalars['Int']['input'];
};

/** All input for the `updateFilm` mutation. */
export type UpdateFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Film` being updated. */
  filmPatch: FilmPatch;
  /** The globally unique `ID` which will identify a single `Film` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Film` mutation. */
export type UpdateFilmPayload = {
  __typename?: 'UpdateFilmPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Film` that was updated by this mutation. */
  film?: Maybe<Film>;
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Film` mutation. */
export type UpdateFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/** All input for the `updateMoodById` mutation. */
export type UpdateMoodByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the mood. */
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Mood` being updated. */
  moodPatch: MoodPatch;
};

/** All input for the `updateMood` mutation. */
export type UpdateMoodInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `Mood` being updated. */
  moodPatch: MoodPatch;
  /** The globally unique `ID` which will identify a single `Mood` to be updated. */
  nodeId: Scalars['ID']['input'];
};

/** The output of our update `Mood` mutation. */
export type UpdateMoodPayload = {
  __typename?: 'UpdateMoodPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Mood` that was updated by this mutation. */
  mood?: Maybe<Mood>;
  /** An edge for our `Mood`. May be used by Relay 1. */
  moodEdge?: Maybe<MoodsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Mood` mutation. */
export type UpdateMoodPayloadMoodEdgeArgs = {
  orderBy?: InputMaybe<Array<MoodsOrderBy>>;
};

/** All input for the `updateRecommendationById` mutation. */
export type UpdateRecommendationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `Recommendation` being updated. */
  recommendationPatch: RecommendationPatch;
};

/** All input for the `updateRecommendation` mutation. */
export type UpdateRecommendationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `Recommendation` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `Recommendation` being updated. */
  recommendationPatch: RecommendationPatch;
};

/** The output of our update `Recommendation` mutation. */
export type UpdateRecommendationPayload = {
  __typename?: 'UpdateRecommendationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Film` that is related to this `Recommendation`. */
  filmByMediaId?: Maybe<Film>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Recommendation` that was updated by this mutation. */
  recommendation?: Maybe<Recommendation>;
  /** An edge for our `Recommendation`. May be used by Relay 1. */
  recommendationEdge?: Maybe<RecommendationsEdge>;
  /** Reads a single `User` that is related to this `Recommendation`. */
  userByRecommenderId?: Maybe<User>;
};


/** The output of our update `Recommendation` mutation. */
export type UpdateRecommendationPayloadRecommendationEdgeArgs = {
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};

/** All input for the `updateRefRecommendationsWMoodById` mutation. */
export type UpdateRefRecommendationsWMoodByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `RefRecommendationsWMood` being updated. */
  refRecommendationsWMoodPatch: RefRecommendationsWMoodPatch;
};

/** All input for the `updateRefRecommendationsWMood` mutation. */
export type UpdateRefRecommendationsWMoodInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `RefRecommendationsWMood` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `RefRecommendationsWMood` being updated. */
  refRecommendationsWMoodPatch: RefRecommendationsWMoodPatch;
};

/** The output of our update `RefRecommendationsWMood` mutation. */
export type UpdateRefRecommendationsWMoodPayload = {
  __typename?: 'UpdateRefRecommendationsWMoodPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Mood` that is related to this `RefRecommendationsWMood`. */
  moodByMoodId?: Maybe<Mood>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Recommendation` that is related to this `RefRecommendationsWMood`. */
  recommendationByRecommendationId?: Maybe<Recommendation>;
  /** The `RefRecommendationsWMood` that was updated by this mutation. */
  refRecommendationsWMood?: Maybe<RefRecommendationsWMood>;
  /** An edge for our `RefRecommendationsWMood`. May be used by Relay 1. */
  refRecommendationsWMoodEdge?: Maybe<RefRecommendationsWMoodsEdge>;
};


/** The output of our update `RefRecommendationsWMood` mutation. */
export type UpdateRefRecommendationsWMoodPayloadRefRecommendationsWMoodEdgeArgs = {
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the user. */
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the upsert `Film` mutation. */
export type UpsertFilmInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Film` to be upserted by this mutation. */
  film: FilmInput;
};

/** The output of our upsert `Film` mutation. */
export type UpsertFilmPayload = {
  __typename?: 'UpsertFilmPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Film` that was upserted by this mutation. */
  film?: Maybe<Film>;
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our upsert `Film` mutation. */
export type UpsertFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};

/** Where conditions for the upsert `Film` mutation. */
export type UpsertFilmWhere = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** All input for the upsert `Mood` mutation. */
export type UpsertMoodInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Mood` to be upserted by this mutation. */
  mood: MoodInput;
};

/** The output of our upsert `Mood` mutation. */
export type UpsertMoodPayload = {
  __typename?: 'UpsertMoodPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Mood` that was upserted by this mutation. */
  mood?: Maybe<Mood>;
  /** An edge for our `Mood`. May be used by Relay 1. */
  moodEdge?: Maybe<MoodsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our upsert `Mood` mutation. */
export type UpsertMoodPayloadMoodEdgeArgs = {
  orderBy?: InputMaybe<Array<MoodsOrderBy>>;
};

/** Where conditions for the upsert `Mood` mutation. */
export type UpsertMoodWhere = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** All input for the upsert `Recommendation` mutation. */
export type UpsertRecommendationInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Recommendation` to be upserted by this mutation. */
  recommendation: RecommendationInput;
};

/** The output of our upsert `Recommendation` mutation. */
export type UpsertRecommendationPayload = {
  __typename?: 'UpsertRecommendationPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Film` that is related to this `Recommendation`. */
  filmByMediaId?: Maybe<Film>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Recommendation` that was upserted by this mutation. */
  recommendation?: Maybe<Recommendation>;
  /** An edge for our `Recommendation`. May be used by Relay 1. */
  recommendationEdge?: Maybe<RecommendationsEdge>;
  /** Reads a single `User` that is related to this `Recommendation`. */
  userByRecommenderId?: Maybe<User>;
};


/** The output of our upsert `Recommendation` mutation. */
export type UpsertRecommendationPayloadRecommendationEdgeArgs = {
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};

/** Where conditions for the upsert `Recommendation` mutation. */
export type UpsertRecommendationWhere = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** All input for the upsert `RefRecommendationsWMood` mutation. */
export type UpsertRefRecommendationsWMoodInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `RefRecommendationsWMood` to be upserted by this mutation. */
  refRecommendationsWMood: RefRecommendationsWMoodInput;
};

/** The output of our upsert `RefRecommendationsWMood` mutation. */
export type UpsertRefRecommendationsWMoodPayload = {
  __typename?: 'UpsertRefRecommendationsWMoodPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Mood` that is related to this `RefRecommendationsWMood`. */
  moodByMoodId?: Maybe<Mood>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Recommendation` that is related to this `RefRecommendationsWMood`. */
  recommendationByRecommendationId?: Maybe<Recommendation>;
  /** The `RefRecommendationsWMood` that was upserted by this mutation. */
  refRecommendationsWMood?: Maybe<RefRecommendationsWMood>;
  /** An edge for our `RefRecommendationsWMood`. May be used by Relay 1. */
  refRecommendationsWMoodEdge?: Maybe<RefRecommendationsWMoodsEdge>;
};


/** The output of our upsert `RefRecommendationsWMood` mutation. */
export type UpsertRefRecommendationsWMoodPayloadRefRecommendationsWMoodEdgeArgs = {
  orderBy?: InputMaybe<Array<RefRecommendationsWMoodsOrderBy>>;
};

/** Where conditions for the upsert `RefRecommendationsWMood` mutation. */
export type UpsertRefRecommendationsWMoodWhere = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** All input for the upsert `User` mutation. */
export type UpsertUserInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be upserted by this mutation. */
  user: UserInput;
};

/** The output of our upsert `User` mutation. */
export type UpsertUserPayload = {
  __typename?: 'UpsertUserPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was upserted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our upsert `User` mutation. */
export type UpsertUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** Where conditions for the upsert `User` mutation. */
export type UpsertUserWhere = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** A user of the app. */
export type User = Node & {
  __typename?: 'User';
  /** The time this person was created. */
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  /** The user’s email  . */
  email: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Film`. */
  filmsByRecommendationRecommenderIdAndMediaId: UserFilmsByRecommendationRecommenderIdAndMediaIdManyToManyConnection;
  /** The user’s first name. */
  firstName: Scalars['String']['output'];
  /** The primary unique identifier for the user. */
  id: Scalars['Int']['output'];
  /** The user’s last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  /** Reads and enables pagination through a set of `Recommendation`. */
  recommendationsByRecommenderId: RecommendationsConnection;
};


/** A user of the app. */
export type UserFilmsByRecommendationRecommenderIdAndMediaIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<FilmCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<FilmsOrderBy>>;
};


/** A user of the app. */
export type UserRecommendationsByRecommenderIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecommendationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Film` values, with data from `Recommendation`. */
export type UserFilmsByRecommendationRecommenderIdAndMediaIdManyToManyConnection = {
  __typename?: 'UserFilmsByRecommendationRecommenderIdAndMediaIdManyToManyConnection';
  /** A list of edges which contains the `Film`, info from the `Recommendation`, and the cursor to aid in pagination. */
  edges: Array<UserFilmsByRecommendationRecommenderIdAndMediaIdManyToManyEdge>;
  /** A list of `Film` objects. */
  nodes: Array<Maybe<Film>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Film` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Film` edge in the connection, with data from `Recommendation`. */
export type UserFilmsByRecommendationRecommenderIdAndMediaIdManyToManyEdge = {
  __typename?: 'UserFilmsByRecommendationRecommenderIdAndMediaIdManyToManyEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Film` at the end of the edge. */
  node?: Maybe<Film>;
  /** Reads and enables pagination through a set of `Recommendation`. */
  recommendationsByMediaId: RecommendationsConnection;
};


/** A `Film` edge in the connection, with data from `Recommendation`. */
export type UserFilmsByRecommendationRecommenderIdAndMediaIdManyToManyEdgeRecommendationsByMediaIdArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RecommendationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RecommendationsOrderBy>>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  /** The time this person was created. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** The user’s email  . */
  email: Scalars['String']['input'];
  /** The user’s first name. */
  firstName: Scalars['String']['input'];
  /** The primary unique identifier for the user. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The user’s last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  recommendationsUsingId?: InputMaybe<RecommendationRecommenderIdFkeyInverseInput>;
};

/** The globally unique `ID` look up for the row to connect. */
export type UserNodeIdConnect = {
  /** The globally unique `ID` which identifies a single `user` to be connected. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to delete. */
export type UserNodeIdDelete = {
  /** The globally unique `ID` which identifies a single `user` to be deleted. */
  nodeId: Scalars['ID']['input'];
};

/** The globally unique `ID` look up for the row to update. */
export type UserOnRecommendationForRecommendationRecommenderIdFkeyNodeIdUpdate = {
  /** The globally unique `ID` which identifies a single `recommendation` to be connected. */
  nodeId: Scalars['ID']['input'];
  /** An object where the defined keys will be set on the `recommendation` being updated. */
  recommendationPatch: RecommendationPatch;
};

/** The fields on `user` to look up the row to update. */
export type UserOnRecommendationForRecommendationRecommenderIdFkeyUsingUserPkeyUpdate = {
  /** The primary unique identifier for the user. */
  id: Scalars['Int']['input'];
  /** An object where the defined keys will be set on the `user` being updated. */
  userPatch: UpdateUserOnRecommendationForRecommendationRecommenderIdFkeyPatch;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  /** The time this person was created. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** The user’s email  . */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The user’s first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the user. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The user’s last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  recommendationsUsingId?: InputMaybe<RecommendationRecommenderIdFkeyInverseInput>;
};

/** The fields on `user` to look up the row to connect. */
export type UserUserPkeyConnect = {
  /** The primary unique identifier for the user. */
  id: Scalars['Int']['input'];
};

/** The fields on `user` to look up the row to delete. */
export type UserUserPkeyDelete = {
  /** The primary unique identifier for the user. */
  id: Scalars['Int']['input'];
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An object where the defined keys will be set on the `film` being updated. */
export type UpdateFilmOnRecommendationForRecommendationMediaIdFkeyPatch = {
  /** The time this film was first recommended. */
  firstRecommendedAt?: InputMaybe<Scalars['Datetime']['input']>;
  genreIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The primary unique identifier for the film. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The platform links for this film. */
  links?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  originalLanguage?: InputMaybe<Scalars['String']['input']>;
  originalTitle?: InputMaybe<Scalars['String']['input']>;
  /** A short description of the film. */
  overview?: InputMaybe<Scalars['String']['input']>;
  /** The link to that film’s poster */
  posterPath?: InputMaybe<Scalars['String']['input']>;
  recommendationsUsingId?: InputMaybe<RecommendationMediaIdFkeyInverseInput>;
  releaseDate?: InputMaybe<Scalars['Date']['input']>;
  /** The film’s title. */
  title?: InputMaybe<Scalars['String']['input']>;
  tmdbId?: InputMaybe<Scalars['Int']['input']>;
};

/** An object where the defined keys will be set on the `mood` being updated. */
export type UpdateMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyPatch = {
  /** The time this mood was created. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** A longer description of what a mood means. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the mood. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The name given to the mood. */
  name?: InputMaybe<Scalars['String']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInverseInput>;
};

/** An object where the defined keys will be set on the `recommendation` being updated. */
export type UpdateRecommendationOnRecommendationForRecommendationMediaIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  filmToMediaId?: InputMaybe<RecommendationMediaIdFkeyInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  recommenderId?: InputMaybe<Scalars['Int']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInverseInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  userToRecommenderId?: InputMaybe<RecommendationRecommenderIdFkeyInput>;
};

/** An object where the defined keys will be set on the `recommendation` being updated. */
export type UpdateRecommendationOnRecommendationForRecommendationRecommenderIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  filmToMediaId?: InputMaybe<RecommendationMediaIdFkeyInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInverseInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  userToRecommenderId?: InputMaybe<RecommendationRecommenderIdFkeyInput>;
};

/** An object where the defined keys will be set on the `recommendation` being updated. */
export type UpdateRecommendationOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  filmToMediaId?: InputMaybe<RecommendationMediaIdFkeyInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  recommenderId?: InputMaybe<Scalars['Int']['input']>;
  refRecommendationsWMoodsUsingId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInverseInput>;
  review?: InputMaybe<Scalars['String']['input']>;
  userToRecommenderId?: InputMaybe<RecommendationRecommenderIdFkeyInput>;
};

/** An object where the defined keys will be set on the `refRecommendationsWMood` being updated. */
export type UpdateRefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsMoodIdFkeyPatch = {
  id?: InputMaybe<Scalars['Int']['input']>;
  moodToMoodId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInput>;
  recommendationId?: InputMaybe<Scalars['Int']['input']>;
  recommendationToRecommendationId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInput>;
};

/** An object where the defined keys will be set on the `refRecommendationsWMood` being updated. */
export type UpdateRefRecommendationsWMoodOnRefRecommendationsWMoodForRefRecommendationsWMoodsRecommendationIdFkeyPatch = {
  id?: InputMaybe<Scalars['Int']['input']>;
  moodId?: InputMaybe<Scalars['Int']['input']>;
  moodToMoodId?: InputMaybe<RefRecommendationsWMoodsMoodIdFkeyInput>;
  recommendationToRecommendationId?: InputMaybe<RefRecommendationsWMoodsRecommendationIdFkeyInput>;
};

/** An object where the defined keys will be set on the `user` being updated. */
export type UpdateUserOnRecommendationForRecommendationRecommenderIdFkeyPatch = {
  /** The time this person was created. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** The user’s email  . */
  email?: InputMaybe<Scalars['String']['input']>;
  /** The user’s first name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** The primary unique identifier for the user. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The user’s last name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  recommendationsUsingId?: InputMaybe<RecommendationRecommenderIdFkeyInverseInput>;
};

export type GetFilmsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFilmsQuery = { __typename?: 'Query', allFilms?: { __typename?: 'FilmsConnection', nodes: Array<{ __typename?: 'Film', title: string, tmdbId: number, releaseDate: any, posterPath?: string | null, overview?: string | null, originalTitle: string, originalLanguage: string, nodeId: string, links: Array<any | null>, id: number, genreIds: Array<number | null>, firstRecommendedAt?: any | null, usersByRecommendationMediaIdAndRecommenderId: { __typename?: 'FilmUsersByRecommendationMediaIdAndRecommenderIdManyToManyConnection', nodes: Array<{ __typename?: 'User', firstName: string, lastName?: string | null } | null> }, recommendationsByMediaId: { __typename?: 'RecommendationsConnection', nodes: Array<{ __typename?: 'Recommendation', moodsByRefRecommendationsWMoodRecommendationIdAndMoodId: { __typename?: 'RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyConnection', nodes: Array<{ __typename?: 'Mood', name: string, id: number } | null> }, userByRecommenderId?: { __typename?: 'User', firstName: string, lastName?: string | null } | null } | null> } } | null> } | null };

export type FilmsByMoodQueryVariables = Exact<{ [key: string]: never; }>;


export type FilmsByMoodQuery = { __typename?: 'Query', allMoods?: { __typename?: 'MoodsConnection', nodes: Array<{ __typename?: 'Mood', id: number, name: string, description: string, refRecommendationsWMoodsByMoodId: { __typename?: 'RefRecommendationsWMoodsConnection', nodes: Array<{ __typename?: 'RefRecommendationsWMood', recommendationByRecommendationId?: { __typename?: 'Recommendation', filmByMediaId?: { __typename?: 'Film', id: number, posterPath?: string | null, title: string, tmdbId: number } | null } | null } | null> } } | null> } | null };

export type FilmsByRecommenderQueryVariables = Exact<{ [key: string]: never; }>;


export type FilmsByRecommenderQuery = { __typename?: 'Query', allUsers?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', firstName: string, lastName?: string | null, filmsByRecommendationRecommenderIdAndMediaId: { __typename?: 'UserFilmsByRecommendationRecommenderIdAndMediaIdManyToManyConnection', nodes: Array<{ __typename?: 'Film', id: number, posterPath?: string | null, title: string, tmdbId: number } | null> } } | null> } | null };

export type SearchByTmdbIdQueryVariables = Exact<{
  search?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchByTmdbIdQuery = { __typename?: 'Query', searchFilms?: { __typename?: 'FilmsConnection', nodes: Array<{ __typename?: 'Film', title: string } | null> } | null };


export const GetFilmsDocument = gql`
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
    `;

/**
 * __useGetFilmsQuery__
 *
 * To run a query within a React component, call `useGetFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilmsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFilmsQuery(baseOptions?: Apollo.QueryHookOptions<GetFilmsQuery, GetFilmsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilmsQuery, GetFilmsQueryVariables>(GetFilmsDocument, options);
      }
export function useGetFilmsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilmsQuery, GetFilmsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilmsQuery, GetFilmsQueryVariables>(GetFilmsDocument, options);
        }
export type GetFilmsQueryHookResult = ReturnType<typeof useGetFilmsQuery>;
export type GetFilmsLazyQueryHookResult = ReturnType<typeof useGetFilmsLazyQuery>;
export type GetFilmsQueryResult = Apollo.QueryResult<GetFilmsQuery, GetFilmsQueryVariables>;
export const FilmsByMoodDocument = gql`
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
              tmdbId
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFilmsByMoodQuery__
 *
 * To run a query within a React component, call `useFilmsByMoodQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmsByMoodQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmsByMoodQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilmsByMoodQuery(baseOptions?: Apollo.QueryHookOptions<FilmsByMoodQuery, FilmsByMoodQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilmsByMoodQuery, FilmsByMoodQueryVariables>(FilmsByMoodDocument, options);
      }
export function useFilmsByMoodLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilmsByMoodQuery, FilmsByMoodQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilmsByMoodQuery, FilmsByMoodQueryVariables>(FilmsByMoodDocument, options);
        }
export type FilmsByMoodQueryHookResult = ReturnType<typeof useFilmsByMoodQuery>;
export type FilmsByMoodLazyQueryHookResult = ReturnType<typeof useFilmsByMoodLazyQuery>;
export type FilmsByMoodQueryResult = Apollo.QueryResult<FilmsByMoodQuery, FilmsByMoodQueryVariables>;
export const FilmsByRecommenderDocument = gql`
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
          tmdbId
        }
      }
    }
  }
}
    `;

/**
 * __useFilmsByRecommenderQuery__
 *
 * To run a query within a React component, call `useFilmsByRecommenderQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmsByRecommenderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmsByRecommenderQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilmsByRecommenderQuery(baseOptions?: Apollo.QueryHookOptions<FilmsByRecommenderQuery, FilmsByRecommenderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilmsByRecommenderQuery, FilmsByRecommenderQueryVariables>(FilmsByRecommenderDocument, options);
      }
export function useFilmsByRecommenderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilmsByRecommenderQuery, FilmsByRecommenderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilmsByRecommenderQuery, FilmsByRecommenderQueryVariables>(FilmsByRecommenderDocument, options);
        }
export type FilmsByRecommenderQueryHookResult = ReturnType<typeof useFilmsByRecommenderQuery>;
export type FilmsByRecommenderLazyQueryHookResult = ReturnType<typeof useFilmsByRecommenderLazyQuery>;
export type FilmsByRecommenderQueryResult = Apollo.QueryResult<FilmsByRecommenderQuery, FilmsByRecommenderQueryVariables>;
export const SearchByTmdbIdDocument = gql`
    query searchByTmdbId($search: Int) {
  searchFilms(search: $search) {
    nodes {
      title
    }
  }
}
    `;

/**
 * __useSearchByTmdbIdQuery__
 *
 * To run a query within a React component, call `useSearchByTmdbIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchByTmdbIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchByTmdbIdQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchByTmdbIdQuery(baseOptions?: Apollo.QueryHookOptions<SearchByTmdbIdQuery, SearchByTmdbIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchByTmdbIdQuery, SearchByTmdbIdQueryVariables>(SearchByTmdbIdDocument, options);
      }
export function useSearchByTmdbIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchByTmdbIdQuery, SearchByTmdbIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchByTmdbIdQuery, SearchByTmdbIdQueryVariables>(SearchByTmdbIdDocument, options);
        }
export type SearchByTmdbIdQueryHookResult = ReturnType<typeof useSearchByTmdbIdQuery>;
export type SearchByTmdbIdLazyQueryHookResult = ReturnType<typeof useSearchByTmdbIdLazyQuery>;
export type SearchByTmdbIdQueryResult = Apollo.QueryResult<SearchByTmdbIdQuery, SearchByTmdbIdQueryVariables>;