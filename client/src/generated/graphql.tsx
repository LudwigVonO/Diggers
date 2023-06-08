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
  Datetime: { input: any; output: any; }
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
  /** The primary unique identifier for the film. */
  id: Scalars['Int']['output'];
  /** The platform links for this film. */
  links?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** A short description of the film. */
  overview?: Maybe<Scalars['String']['output']>;
  /** The link to that film’s poster */
  posterLink?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Recommendation`. */
  recommendationsByMediaId: RecommendationsConnection;
  /** The film’s title. */
  title: Scalars['String']['output'];
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
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `links` field. */
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Checks for equality with the object’s `overview` field. */
  overview?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `posterLink` field. */
  posterLink?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** An input for mutations affecting `Film` */
export type FilmInput = {
  /** The time this film was first recommended. */
  firstRecommendedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** The primary unique identifier for the film. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The platform links for this film. */
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A short description of the film. */
  overview?: InputMaybe<Scalars['String']['input']>;
  /** The link to that film’s poster */
  posterLink?: InputMaybe<Scalars['String']['input']>;
  /** The film’s title. */
  title: Scalars['String']['input'];
};

/** Represents an update to a `Film`. Fields that are set will be updated. */
export type FilmPatch = {
  /** The time this film was first recommended. */
  firstRecommendedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** The primary unique identifier for the film. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** The platform links for this film. */
  links?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A short description of the film. */
  overview?: InputMaybe<Scalars['String']['input']>;
  /** The link to that film’s poster */
  posterLink?: InputMaybe<Scalars['String']['input']>;
  /** The film’s title. */
  title?: InputMaybe<Scalars['String']['input']>;
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
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LinksAsc = 'LINKS_ASC',
  LinksDesc = 'LINKS_DESC',
  Natural = 'NATURAL',
  OverviewAsc = 'OVERVIEW_ASC',
  OverviewDesc = 'OVERVIEW_DESC',
  PosterLinkAsc = 'POSTER_LINK_ASC',
  PosterLinkDesc = 'POSTER_LINK_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC'
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
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Int']['input']>;
  recommenderId: Scalars['Int']['input'];
  review?: InputMaybe<Scalars['String']['input']>;
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

/** Represents an update to a `Recommendation`. Fields that are set will be updated. */
export type RecommendationPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  mediaId?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  recommenderId?: InputMaybe<Scalars['Int']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
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
  moodId: Scalars['Int']['input'];
  recommendationId: Scalars['Int']['input'];
};

/** Represents an update to a `RefRecommendationsWMood`. Fields that are set will be updated. */
export type RefRecommendationsWMoodPatch = {
  id?: InputMaybe<Scalars['Int']['input']>;
  moodId?: InputMaybe<Scalars['Int']['input']>;
  recommendationId?: InputMaybe<Scalars['Int']['input']>;
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

export type GetFilmsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFilmsQuery = { __typename?: 'Query', allFilms?: { __typename?: 'FilmsConnection', nodes: Array<{ __typename?: 'Film', title: string, id: number, firstRecommendedAt?: any | null, links?: Array<string | null> | null, nodeId: string, overview?: string | null, posterLink?: string | null, recommendationsByMediaId: { __typename?: 'RecommendationsConnection', nodes: Array<{ __typename?: 'Recommendation', recommenderId: number, moodsByRefRecommendationsWMoodRecommendationIdAndMoodId: { __typename?: 'RecommendationMoodsByRefRecommendationsWMoodRecommendationIdAndMoodIdManyToManyConnection', nodes: Array<{ __typename?: 'Mood', name: string, description: string } | null> } } | null> } } | null> } | null };


export const GetFilmsDocument = gql`
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