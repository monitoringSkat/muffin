module.exports = {
  name: "bash",
  category: "botowner",
  aliases: ["sh"],
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);

    if (!args) {
      return message.channel.send(bot.lang.GLOBAL.PROVIDE_ARGS);
    }

    const result = await require('child_process')
    .execSync(args.join(' '))
    .toString('utf8');

    message.channel.send(result, { split: true });
  }
};
