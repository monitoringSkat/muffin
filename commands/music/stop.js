module.exports = {
    name: "stop",
    category: "music",
    aliases: ["leave", "dc", "disconnect"],
    cooldown: 2,
    async execute(bot, message) {
      const lang = await bot.getGuildLang(message.guild.id);
      const queue = await bot.player.getQueue(message);
      const userVoice = message.member.voice.channel;
      const botVoice = message.guild.me.voice.channel;

      if (!userVoice) {
        return message.reply(lang.MUSIC.MUST_BE_IN_VC);
      }

      if (botVoice && userVoice && userVoice !== botVoice) {
        return message.reply(lang.MUSIC.MUST_BE_IN_SAME_VC);
      }

      if (!botVoice) {
        return message.reply(lang.MUSIC.EMPTY_QUEUE);
      }

      if (!queue && botVoice) {
        bot.channels.cache.get(botVoice.id).leave()
        message.reply(lang.MUSIC.CHANNEL_LEFT);
      } else {
        bot.player.stop(message);
        message.reply(lang.MUSIC.CHANNEL_LEFT);
      }
    },
  };
  