import express, { application } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config();



app.use('graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(process.env.PORT, ()=>{
  `Server run on ${process.env.PORT}`
});

