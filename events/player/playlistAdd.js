module.exports = {
  name: "playlistAdd",
  type: "player",
  async execute(bot, message, queue, playlist) {
    const lang = await bot.getGuildLang(message.guild.id);

    const embed = bot.buildEmbed(message)
    .setAuthor(lang.MUSIC.PLAYLIST_ADDED)
    .setTitle(bot.escapeMarkdown(playlist.title))
    .setURL(playlist.url)
    .setThumbnail(playlist.thumbnail)
    .addField(lang.OTHER.REQUESTED_BY, bot.escapeMarkdown(message.author.tag), true)
    .addField(lang.MUSIC.TRACKS, playlist.tracks.length, true);

    return message.reply(embed);
  }
}
