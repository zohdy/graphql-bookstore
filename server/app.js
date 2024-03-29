const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mongo atlas db
mongoose.connect('mongodb+srv://zohdy:trefalke@cluster0-j28sw.mongodb.net/gql-playground?retryWrites=true', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
   console.log('connected to database');
});
app.use('/graphql', graphqlHTTP({
   schema: schema,
   graphiql: true
}));

app.listen(4000, () => {
   console.log('Now listening for requests on port 4000');
});