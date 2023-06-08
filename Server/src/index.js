'use strict';

// KOA IMPORTS
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

app.use(cors());
app.use(bodyParser());

// POSTGRAPHILE - used to simplify the implementation of GraphQL queries with Postgres. Set up in 
const Postgraphile = require('./postgraphile');
app.use(Postgraphile);


const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`Server running at http://localhost:${PORT}`);
});