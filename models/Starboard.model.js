const { model, Schema, models } = require("mongoose");

const StarboardModel = new Schema({
  guild_id: { type: String, required: true },
  channel_id: { type: String, required: true },
  options: { type: Object, default: {} },
});

module.exports = models.Starboard || model("Starboard", StarboardModel);
