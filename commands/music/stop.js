module.exports = {
    name: "stop",
    category: "music",
    aliases: ["leave", "dc", "disconnect"],
    cooldown: 2,
    async execute(bot, message) {
      const lang = await bot.getGuildLang(message.guild.id);
      const queue = await bot.player.getQueue(message);
      // const botVoice = await bot.voice.connections.get(message.guild.id).channel.id;
      const userVoice = message.member.voice.channel;

      if (!userVoice) {
        return message.channel.send(lang.MUSIC.MUST_BE_IN_VC);
      }
  
      if (!bot.player.isPlaying(message)) {
        return message.channel.send(lang.MUSIC.EMPTY_QUEUE);
      }
  
      bot.player.stop(message);
      message.channel.send(lang.MUSIC.CHANNEL_LEFT);
    },
  };
  