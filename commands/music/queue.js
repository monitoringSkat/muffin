module.exports = {
  name: "queue",
  category: "music",
  aliases: ["q", "tracklist", "tl"],
  cooldown: 2,
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const queue = bot.player.getQueue(message);

    if (!queue) {
      return message.reply(lang.MUSIC.EMPTY_QUEUE);
    }

    const embed = bot.buildEmbed(message)
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setTitle(lang.MUSIC.QUEUE)
      .setDescription(
        queue.tracks.map((track, i) => {
            return `${i === 0 ? `${lang.MUSIC.NOW_PLAYING}:` : `${i}.`} **${track.title}** \`[${track.duration}]\``
          }).slice(0, 21).join("\n"));

    message.channel.send(embed);
  },
};