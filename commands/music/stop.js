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
  
      if (  !queue) {
        return message.channel.send(lang.MUSIC.EMPTY_QUEUE);
      }
      
      try {
        bot.player.stop(message);
        message.channel.send(lang.MUSIC.CHANNEL_LEFT);
      } catch (e) {
        bot.sendErrorLog(bot, e, e?.type, e?.stack)
        message.channel.send(`${lang.GLOBAL.ERROR}\n\n\`\`\`${e.stack}\`\`\``);
      }
    },
  };
  