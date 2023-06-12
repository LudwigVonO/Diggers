//@ts-nocheck
const { postgraphile } = require("postgraphile");
// require("postgraphile-core/package.json");
const PostGraphileNestedMutations = require("postgraphile-plugin-nested-mutations");
const PgManyToManyPlugin = require("@graphile-contrib/pg-many-to-many");
const {
  PgMutationUpsertPlugin
} = require("@fullstackio/postgraphile-upsert-plugin");


const Postgraphile = postgraphile(
  process.env.DATABASE_URL || "postgres:///postgres",
  "diggers_app",
  {
    appendPlugins: [
      PgManyToManyPlugin,
      PgMutationUpsertPlugin,
      PostGraphileNestedMutations,
    ],
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }
);

module.exports = Postgraphile;