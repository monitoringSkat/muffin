const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  user_id: { type: String, required: true },
  guild_id: { type: String, required: true },
  blacklisted: { type: Boolean, default: false },
});

module.exports = model("User", userSchema);
