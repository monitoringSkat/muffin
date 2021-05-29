module.exports = {
  name: "warn",
  type: "bot",
  execute(bot, info) {
    if(bot.config.debug) {
      console.log(`[Warning] ${info}`)
    }
  },
};
