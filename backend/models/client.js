const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    name: String,
    user: { type: Schema.ObjectId, ref: 'User' },
    email: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);