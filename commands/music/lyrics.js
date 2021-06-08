module.exports = {
    name: "lyrics",
    category: "music",
    aliases: ["lyr"],
    cooldown: 5,
    botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
    async execute(bot, message, args) {
      const lang = await bot.getGuildLang(message.guild.id);
      let track = args.join(" ");
  
      if (!bot.player.isPlaying(message) && !track) {
        return message.channel.send(lang.MUSIC.EMPTY_QUEUE);
      } 

      if (bot.player.isPlaying(message) && !track) {
        track = bot.player.nowPlaying(message).title;
      }

      const searching = await message.channel.send(lang.MUSIC.SEARCHING_LYRICS.replace("{track}", bot.escapeMarkdown(track)));

      const lyrics = await bot.player.lyrics(track);

      if(!lyrics) {
        return searching.edit(lang.MUSIC.NO_LYRICS_FOUND)
      }

      const embed = bot.buildEmbed(message)
       .setTitle(lyrics.title)
       .setURL(lyrics.url)
       .setDescription(lyrics.lyrics)
       .setThumbnail(lyrics.thumbnail);

      searching.edit(null, embed);
    },
  };
  