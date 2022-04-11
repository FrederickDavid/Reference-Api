const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fruitSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    person: {
      type: Schema.Types.ObjectId,
      ref: "peopleCollections",
    },
  },
  { timestamps: true }
);

const fruitModel = mongoose.model("fruitCollections", fruitSchema);

module.exports = fruitModel;
