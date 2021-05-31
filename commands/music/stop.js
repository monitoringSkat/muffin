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
        return message.channel.send(lang.MUSIC.MUST_BE_IN_VC);
      }

      if (botVoice && userVoice && userVoice !== botVoice) {
        return message.channel.send(lang.MUSIC.MUST_BE_IN_SAME_VC);
      }

      if (!botVoice) {
        return message.channel.send(lang.MUSIC.EMPTY_QUEUE);
      }

      if (!queue && botVoice) {
        bot.channels.cache.get(botVoice.id).leave()
        message.channel.send(lang.MUSIC.CHANNEL_LEFT);
      } else {
        bot.player.stop(message);
        message.channel.send(lang.MUSIC.CHANNEL_LEFT);
      }
    },
  };
  