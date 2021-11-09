import express from "express";
import { graphqlHTTP } from "express-graphql";
import {schema} from "./schema/schema.js";
import dotenv from 'dotenv';
import  mongoose from "mongoose";

const app = express();
dotenv.config();



app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, ()=>{
      console.log(`Server run on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('ERROR: ', err)
  })



