const fs = require("fs");

const locales = fs
  .readdirSync("./locales/")
  .filter((f) => f.endsWith(".js"))
  .map((la) => la.slice(0, -3));

module.exports = {
  name: "locale",
  category: "settings",
  cooldown: 5,
  aliases: ["language", "lang"],
  memberPermissions: ["MANAGE_GUILD"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const locale = args[0];

    if (!locale) {
      return message.channel.send(
        `${lang.OTHER.LOCALES_LIST} ${locales
        .map((l) => `\`${l}\``)
        .join(", ")}`);
    }
    if(!locales.includes(locale)) {
      return message.channel.send(
        `${lang.OTHER.LOCALE_NOT_AVAILABLE} ${locales
        .map((l) => `\`${l}\``)
        .join(", ")}`);
    }
  
  try {
    bot.updateGuildById(message.guild.id, { "locale": locale });
    message.channel.send(lang.BOT.LOCALE_UPDATED
      .replace("{locale}", locale));
  } catch (e) {
      bot.sendErrorLog(bot, e, e?.type, e?.stack)
      message.channel.send(`${lang.GLOBAL.ERROR}\n\n\`\`\`${e.stack}\`\`\``);
    }
  }
}