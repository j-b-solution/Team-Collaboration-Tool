const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    message: {
      type: String
    },
    username: {
        type: String,
        default: "",
        trim: true,
        require: "username is required"
    }
  },
  {
    timestamps: true
  }
);

let Chat = mongoose.model("message", chatSchema);

module.exports = Chat;