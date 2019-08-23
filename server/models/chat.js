const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    message: {
      type: String
    },
    username: {
        type: String,
        default: "",
        trim: true,
        require: "username is required"
    },
    created: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "chatList"
  }
);

// let Chat = mongoose.model("message", chatSchema);

// module.exports = Chat;

module.exports = mongoose.model('chat', chatSchema)