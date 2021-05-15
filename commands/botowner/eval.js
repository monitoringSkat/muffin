module.exports = {
  name: "eval",
  description: "",
  category: "botowner",
  owner: true,
  aliases: ["e"],
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const toEval = args.join(" ");
    try {
      if (!toEval) {
        return message.channel.send(lang.GLOBAL.PROVIDE_ARGS);
      }

      let evaled = await eval(toEval);

      const embed = bot.buildEmbed(message)
      .setDescription(`\`\`\`js\n${evaled}\`\`\``);

      message.channel.send(embed);
    } catch (error) {
      const errorEmbed = bot.buildEmbed(message)
        .setTitle(lang.GLOBAL.ERROR)
        .setDescription(`\`\`\`js\n${error}\`\`\``);

      message.channel.send(errorEmbed);
    }
  },
};
