module.exports = {
  name: "prefix",
  category: "settings",
  cooldown: 2,
  memberPermissions: ["MANAGE_GUILD"],
  async execute(bot, message, args) {
    const prefix = args[0];
    const lang = await bot.getGuildLang(message.guild.id);
    const guild = await bot.getGuildById(message.guild.id);

    if (!prefix) {
      return message.channel.send(lang.GLOBAL.PROVIDE_ARGS);
    }
    if (prefix.length > 5) {
      return message.channel.send(lang.OTHER.ARGS_VALUE_MAX
      .replace("{max}", "5")
      .replace("{got}", prefix.length));
    }

    try { 
        bot.updateGuildById(message.guild.id, { prefix: prefix });
        message.channel.send(lang.BOT.PREFIX_UPDATED
            .replace("{prefix}", prefix));
    } catch (e) {
        bot.sendErrorLog(bot, e, e?.type, e?.stack)
        message.channel.send(`${lang.GLOBAL.ERROR}\n\n\`\`\`${e.stack}\`\`\``);
    }  
  },
};
