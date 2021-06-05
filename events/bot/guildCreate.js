module.exports = {
  name: "guildCreate",
  type: "bot",
  async execute(bot, guild) {
    await bot.addGuild(guild.id);

    if (guild.region === "russia") {
      bot.updateGuildById(guild.id, { locale: "ru_ru" })
    };
  },
};
