import mongose from "mongoose";

const Schema = mongose.Schema;;

const filmSchema = new Schema ({
  id: String,
  filmName: String,
  kindName: String,
});

const Film = mongose.model("film", filmSchema);

export default Film;