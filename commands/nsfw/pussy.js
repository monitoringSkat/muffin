const fetch = require("node-fetch");

module.exports = {
  name: "pussy",
  category: "nsfw",
  cooldown: 5,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);
    const data = await fetch(
      "https://nekobot.xyz/api/image?type=pussy"
    ).then((res) => res.json());

    const embed = bot.buildEmbed(message)
    .setImage(data.message);

    message.channel.send(embed);
  },
};
