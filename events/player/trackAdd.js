module.exports = {
    name: "trackAdd",
    type: "player",
    async execute(bot, message, queue, track) {
      const lang = await bot.getGuildLang(message.guild.id);

      const embed = bot.buildEmbed(message)
      .setAuthor(lang.MUSIC.QUEUED.replace("{pos}", queue.tracks.length - 1))
      .setTitle(track.title)
      .setURL(track.url)
      .setThumbnail(track.thumbnail)
      .addField(lang.OTHER.REQUESTED_BY, track.requestedBy.tag, true)
      .addField(lang.MUSIC.UPLOADED_BY, track.author, true)
      .addField(lang.MUSIC.DURATION, track.duration, true);

      return message.reply(embed);
    },
  };
