module.exports = {
    name: "error",
    type: "player",
    async execute(bot, error, message) {
      const lang = await bot.getGuildLang(message.guild.id);
  
      switch (error) {
        case "UnableToJoin": {
          return message.reply(lang.MUSIC.JOIN_ERROR);
        }
        case "NotConnected": {
          return message.reply(lang.MUSIC.MUST_BE_IN_VC);
        }
        case "NotPlaying": {
          return message.reply(lang.MUSIC.EMPTY_QUEUE);
        }
        case "ParseError": {
          return message.reply(lang.MUSIC.FETCH_ERROR);
          bot.player.skip(message);
        }
        case "VideoUnavailable": {
          return message.reply(lang.MUSIC.TRACK_UNAVAILABLE);
          bot.player.skip(message);
        }
        case "MusicStarting": {
          return message.reply(lang.MUSIC.TRACK_STILL_LOADING);
        }
        default: {
          bot.sendErrorLog(bot, { stack: error, name: "discord-player" }, "error");
          return message.reply(`${lang.GLOBAL.ERROR}\n\n\`\`\`${error?.stack || e}\`\`\``);
        }
      }
    },
  };
  