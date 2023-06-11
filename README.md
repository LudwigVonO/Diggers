# Diggers

## About
Diggers is an app that makes it easier to make and get content recommendations from your friends and people with similar tastes. 
Diggers aims to give you access to information rather than telling you what you should watch. 
There's too much content for you to see, it's time to prioritize quanlity over quantity.

## Recommendation system
Rather than asking you for a review or a rating, we'll first ask you for 'moods'. 
These moods aim to synthetize the reason you enjoyed a particular media item and, hence, what others may search for.



## How to
### Basics
The server uses Koa and Postgraphile. Postgraphile is a library that automates the generation of GraphQL queries, resolvers and mutations.

The client is built with Typescript and React and uses Codegen to generate the GraphQL queries and mutations.

### Server 
To start the server follow these steps: 
1. cd to Server and run `npm i`.
2. Enter `npm run createDatabase` to create the databaseSchema.
3. Enter `npm run insertDummyData` to insert data into the DB.
4. run npm start.

### Client
Use yarn to install the dependencies and then run yarn start.