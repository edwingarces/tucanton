const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: String,
    team: { type: Schema.ObjectId, ref: 'Team' },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);