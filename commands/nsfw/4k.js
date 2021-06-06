const fetch = require("node-fetch");

module.exports = {
  name: "4k",
  category: "nsfw",
  cooldown: 5,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  async execute(bot, message) {
    const data = await fetch(
      "https://nekobot.xyz/api/image?type=4k"
    ).then((res) => res.json());

    const embed = bot.buildEmbed(message)
    .setImage(data.message);

    message.reply(embed);
  },
};
