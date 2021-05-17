const fetch = require("node-fetch");

module.exports = {
  name: "nekogif",
  category: "nsfw",
  aliases: ["neko_gif", "ngif"],
  cooldown: 5,
  nsfw: true,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);
    const data = await fetch(
      "https://nekos.life/api/v2/img/nsfw_neko_gif"
    ).then((res) => res.json());

    const embed = bot.buildEmbed(message)
    .setImage(data.url);

    message.channel.send(embed);
  },
};
