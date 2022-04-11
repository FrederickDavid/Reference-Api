const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peopleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    pointer: [
      {
        type: Schema.Types.ObjectId,
        ref: "fruitCollections",
      },
    ],
  },
  { timestamps: true }
);

const peopleModel = mongoose.model("peopleCollections", peopleSchema);

module.exports = peopleModel;
