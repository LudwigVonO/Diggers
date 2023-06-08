const { postgraphile } = require("postgraphile");
const PgManyToManyPlugin = require("@graphile-contrib/pg-many-to-many");

const Postgraphile = postgraphile(
  process.env.DATABASE_URL || "postgres:///postgres",
  "diggers_app",
  {
    appendPlugins: [PgManyToManyPlugin],
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }
);

module.exports = Postgraphile;