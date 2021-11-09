import mongose from "mongoose";

const Schema = mongose.Schema;

const kindSchema = new Schema ({
  id: String,
  kindName: String,
});

const Kind = mongose.model("kind", kindSchema);

export default Kind;