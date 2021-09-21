import graphql from "graphql";
import _ from  "lodash";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema
} = graphql;

let films = [
  {id: '1', name: "Film 1", kindId:"tür 1" },
  {id: '2', name: "Film 2", kindId: "tür 2" },
  {id: '3', name: "Film 3", kindId: "tür 1" },
]

let kinds = [
  {id: '1', kindName: "tür 1" },
  {id: '2', kindName: "tür 2" },
]

const FilmType = new GraphQLObjectType({
  name: 'Film',
  fields: ()=> ({
    id: {type: GraphQLID},
    name: {type: GraphQLString}, 
    kind: {
      type: KindType,
      resolve(parent, args){
        console.log(parent)
      }
    }
  }),
});

const KindType = new GraphQLObjectType({
  name: 'Kind',
  fields: ()=> ({
    id: {type: GraphQLID},
    kindName: {type: GraphQLString}
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'Root',
  fields: {
    film: {
      type: FilmType,
      args: {id:{type: GraphQLID}},
      resolve(parent, args){
        //db den gelecek
  
        return _.find(filmler, {id: args.id})
      }
    },
    kind: {
      type: KindType,
      args: {id:{type: GraphQLID}},
      resolve(parent, args){
        //db den gelecek
  
        return _.find(kinds, {id: args.id})
      }
    }
  }
});

export let schema = new GraphQLSchema({
  query: RootQuery
})