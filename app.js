import express from 'express';
import graphHTTP from 'express-graphql';

import Schema from './server/schema';

var app = express();
app.use('/graphql/', graphHTTP({
  schema: Schema,
  pretty: true,
  graphql: true
}));

module.exports = app;
