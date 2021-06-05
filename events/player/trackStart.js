module.exports = {
    name: "trackStart",
    type: "player",
    async execute(bot, message, track) {
      const lang = await bot.getGuildLang(message.guild.id);

      const embed = bot.buildEmbed(message)
      .setAuthor(lang.MUSIC.STARTED_PLAYING)
      .setTitle(bot.escapeMarkdown(track.title))
      .setURL(track.url)
      .setThumbnail(track.thumbnail)
      .addField(lang.OTHER.REQUESTED_BY, bot.escapeMarkdown(track.requestedBy.tag), true)
      .addField(lang.MUSIC.UPLOADED_BY, track.author, true)
      .addField(lang.MUSIC.DURATION, track.duration, true);

      return message.reply(embed);
    },
  };
