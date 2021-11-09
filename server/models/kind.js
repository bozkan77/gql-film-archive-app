import mongose, { Schema } from "mongoose";

const Schema = mongose.Schema;;

const kindSchema = new Schema ({
  id: String,
  kindName: String,
});

module.exports = mongose.model("kind", kindSchema);