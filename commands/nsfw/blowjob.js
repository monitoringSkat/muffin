const fetch = require("node-fetch");

module.exports = {
  name: "blowjob",
  category: "nsfw",
  aliases: ["bj", "bjob"],
  cooldown: 5,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);
    const data = await fetch(
      "https://nekos.life/api/v2/img/blowjob"
    ).then((res) => res.json());

    const embed = bot.buildEmbed(message)
    .setImage(data.url);

    message.channel.send(embed);
  },
};
