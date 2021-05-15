module.exports = {
  name: "error",
  type: "bot",
  execute: (_bot, bot, error) => {
    bot.sendErrorLog(_bot, error, "error");
  },
};
