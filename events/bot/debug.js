module.exports = {
  name: "debug",
  type: "bot",
  execute(bot, debug) {
    if(bot.config.debug) {
      console.log(`[Debug] ${debug}`)
    }
  },
};
