import graphql from "graphql";
import _ from  "lodash";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema
} = graphql;

let films = [
  {id: '1', name: "Film 1", kind: "tür 1" },
  {id: '2', name: "Film 2", kind: "tür 2" },
  {id: '3', name: "Film 3", kind: "tür 1" },
]

const FilmType = new GraphQLObjectType({
  name: 'Film',
  fields: ()=> ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    kind: {type: GraphQLString}
  })
})