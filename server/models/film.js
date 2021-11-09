import mongose, { Schema } from "mongoose";

const Schema = mongose.Schema;;

const filmSchema = new Schema ({
  id: String,
  filmName: String,
  kindName: String,
});

module.exports = mongose.model("film", filmSchema);