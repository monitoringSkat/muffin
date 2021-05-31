module.exports = {
  name: "rateLimit",
  type: "bot",
  execute(bot, rateLimitInfo) {
    if(bot.config.debug) {
      console.log(`[Warning] ${rateLimitInfo}`)
    }
  },
};
