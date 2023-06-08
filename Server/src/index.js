'use strict';

// KOA IMPORTS
const Koa = require('koa');
const app = new Koa();
// const bodyParser = require('koa-bodyparser');


// POSTGRAPHILE - used to simplify the implementation of GraphQL queries with Postgres. Set up in 
const Postgraphile = require('./postgraphile');


app.use(Postgraphile);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`);
});