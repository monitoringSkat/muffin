require("./utils/database");
const { Collection, Client, Constants } = require("discord.js");
const config = require("./config.json");
const { Player } = require("discord-player");
const { functions } = require("./utils/functions");
const bot = new Client({
  disableMentions: "all",
  partials: [
    "GUILD_MEMBER",
    "MESSAGE",
    "USER",
    "REACTION"
  ],
});
Constants.DefaultOptions.ws.properties.$browser = "Discord Android";

functions.forEach((func) => {
  bot[func.name] = func;
});

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.player = new Player(bot, {
  autoSelfDeaf: true,
  leaveOnEnd: true,
  leaveOnEndCooldown: 300000,
  leaveOnEmpty: true,
  leaveOnEmptyCooldown: 300000,
  leaveOnStop: true,
  enableLive: true,
  fetchBeforeQueued: true
});


require("./handlers/CommandHandler")(bot);
require("./handlers/EventHandler")(bot);

bot.login(config.token);

process.on("unhandledRejection", (error) => 
  bot.sendErrorLog(bot, error, "error"));

process.on("uncaughtExceptionMonitor", (error) =>
  bot.sendErrorLog(bot, error, "error"));

process.on("warning", (warning) =>
  bot.sendErrorLog(bot, warning, "warning"));
