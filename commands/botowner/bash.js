module.exports = {
  name: "bash",
  category: "botowner",
  owner: true,
  aliases: ["sh"],
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);

    if (!args) {
      return message.channel.send(bot.lang.GLOBAL.PROVIDE_ARGS);
    }

    const msg = await message.channel.send(lang.OTHER.PROCESSING);
    let result = await require('child_process')
    .execSync(args.join(' ')
    .toString('utf8') + ' ');

    if (result.length > 2000) {
      console.log(result);
      result = "Output exceeds 2000 symbols, check your console.";
      msg.edit(result);
    } else msg.edit(result);
  },
};
