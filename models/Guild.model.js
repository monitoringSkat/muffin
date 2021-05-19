const { model, Schema } = require("mongoose");

const guildSchema = new Schema({
  guild_id: { type: String, required: true },
  prefix: { type: String, default: "." },
  disabled_commands: { type: Array, default: [] },
  locale: { type: String, default: "en_gb" },
  ignored_channels: { type: Array, default: [] },
});

module.exports = model("Guild", guildSchema);
