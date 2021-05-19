const fetch = require("node-fetch");

module.exports = {
  name: "lewd",
  category: "nsfw",
  cooldown: 5,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);
    const data = await fetch(
      "https://nekos.life/api/v2/img/lewd"
    ).then((res) => res.json());

    const embed = BaseEmbed(message)
    .setImage(data.url);

    message.channel.send(embed);
  },
};
