const fetch = require("node-fetch");

module.exports = {
  name: "hentai",
  category: "nsfw",
  cooldown: 5,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  async execute(bot, message) {
    const data = await fetch(
      "https://nekobot.xyz/api/image?type=hentai"
    ).then((res) => res.json());

    const embed = bot.buildEmbed(message)
    .setImage(data.message);

    message.channel.send(embed);
  },
};