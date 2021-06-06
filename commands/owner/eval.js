module.exports = {
  name: "eval",
  category: "owner",
  aliases: ["e"],
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const toEval = args.join(" ");
    try {
      if (!toEval) {
        return message.reply(lang.GLOBAL.PROVIDE_ARGS);
      }

      let evaled = await eval(toEval);
      evaled = require("util").inspect(evaled, {
        depth: 0,
        maxArrayLength: null,
      });

      const embed = bot.buildEmbed(message)
      .setDescription(`\`\`\`js\n${evaled}\`\`\``);

      message.reply(embed);
    } catch (error) {
      const errorEmbed = bot.buildEmbed(message)
        .setTitle(lang.GLOBAL.ERROR)
        .setDescription(`\`\`\`js\n${error}\`\`\``);

      message.reply(errorEmbed);
    }
  },
};
