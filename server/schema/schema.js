import graphql from "graphql";
import _ from  "lodash";
import Kind from "../models/kind.js";
import Film from "../models/film.js";

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList
} = graphql;


const FilmType = new GraphQLObjectType({
  name: 'Film',
  fields: ()=> ({
    id: {type: GraphQLID},
    filmName: {type: GraphQLString}, 
    kind: {
      type: KindType,
      resolve(parent, args){
        //return _.find(kinds, {id: parent.kindId})
      }
    }
  }),
});

const KindType = new GraphQLObjectType({
  name: 'Kind',
  fields: ()=> ({
    id: {type: GraphQLID},
    kindName: {type: GraphQLString},
    films: {
      type: new GraphQLList(FilmType),
      resolve(parent,args){
        // return _.filter(films, {kindId: parent.id})
      }
    }
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
  
        // return _.find(films, {id: args.id})
      }
    },
    kind: {
      type: KindType,
      args: {id:{type: GraphQLID}},
      resolve(parent, args){
        //db den gelecek
  
        // return _.find(kinds, {id: args.id})
      }
    },
    films: {
      type: new GraphQLList(FilmType),
      resolve(parent, args){
        // return films
      }
    },
    kinds:{
      type: new GraphQLList(KindType),
      resolve(parent, args){
        // return kinds
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addKind: {
      type: KindType,
      args: {
        kindName: {type: GraphQLString}
      },
      resolve(parent, args){
        let kind = new Kind({
          kindName: args.kindName
        });
        return kind.save();
      }
    },
    addFilm: {
      type: FilmType,
      args: {
        filmName: {type: GraphQLString},
        kindId: {type: GraphQLID}
      },
      resolve(parent, args){
        let film = new Film({
          filmName: args.filmName,
          kindId: args.kindId
        });
        return film.save();
      }
    }
  }
});

export let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})