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
    team_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team'
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