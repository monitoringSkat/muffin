module.exports = {
    name: "error",
    async execute(bot, error, message) {
      const lang = await bot.getGuildLang(message.guild.id);
  
      switch (error) {
        case "UnableToJoin": {
          return message.channel.send(lang.MUSIC.JOIN_ERROR);
        }
        case "NotConnected": {
          return message.channel.send(lang.MUSIC.MUST_BE_IN_VC);
        }
        case "NotPlaying": {
          return message.channel.send(lang.MUSIC.EMPTY_QUEUE);
        }
        default: {
          bot.sendErrorLog(bot, { stack: error, name: "discord-player" }, "error");
          return message.channel.send(lang.GLOBAL.ERROR);
        }
      }
    },
  };
  