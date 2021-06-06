module.exports = {
  name: "bash",
  category: "owner",
  aliases: ["sh"],
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);

    if (!args) {
      return message.reply(bot.lang.GLOBAL.PROVIDE_ARGS);
    }

    const result = await require('child_process')
    .execSync(args.join(' '))
    .toString('utf8');

    message.reply(result, { split: true });
  }
};
