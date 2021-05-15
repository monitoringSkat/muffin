module.exports = {
  name: "channelEmpty",
  type: "player",
  async execute(bot, message, queue) {
    const lang = await bot.getGuildLang(message.guild.id);

    message.channel.send(lang.MUSIC.CHANNEL_LEFT);
  },
};
