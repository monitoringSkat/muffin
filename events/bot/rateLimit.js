module.exports = {
  name: "rateLimit",
  type: "bot",
  execute(bot, rateLimitInfo) {
    if(bot.config.debug) {
      console.log(`[Rate Limit] Rate-limited for ${rateLimitInfo.timeout}ms on ${rateLimitInfo.route} route for hitting ${rateLimitInfo.limit} messages limit`)
    }
  },
};
