require("./utils/startupCheck")();
require("./utils/database");
const { Collection, Client, Constants, Intents } = require("discord.js");
const config = require("./config.json");
const { Player } = require("discord-player");
const MuffinStarboards = require("./classes/MuffinStarboards");
const { functions } = require("./utils/functions");
const bot = new Client({
  disableMentions: "everyone",
  restRequestTimeout: 30000,
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES
  ],
  partials: [
    Constants.PartialTypes.GUILD_MEMBER,
    Constants.PartialTypes.MESSAGE,
    Constants.PartialTypes.USER,
    Constants.PartialTypes.REACTION
  ],
  allowedMentions: { parse: ["roles", "users"] }
});

Constants.DefaultOptions.ws.properties.$browser = "Discord Android";

functions.forEach((func) => {
  bot[func.name] = func;
});

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.package = require("./package.json");
bot.config = require("./config.json");
bot.player = new Player(bot, {
  autoSelfDeaf: true,
  leaveOnEnd: true,
  leaveOnEndCooldown: 180000,
  leaveOnEmpty: true,
  leaveOnEmptyCooldown: 180000,
  leaveOnStop: true,
  enableLive: true,
});
bot.starboards = new MuffinStarboards(bot, {
  storage: false
});

global.Promise = require("bluebird");
Promise.config({
  longStackTraces: true
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