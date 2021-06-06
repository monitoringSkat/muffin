module.exports = {
  name: "channelEmpty",
  type: "player",
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);

    message.reply(lang.MUSIC.INACTIVE_CHANNEL_LEFT);
  },
};
