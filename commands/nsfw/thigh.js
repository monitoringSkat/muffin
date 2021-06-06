const fetch = require("node-fetch");

module.exports = {
  name: "thigh",
  category: "nsfw",
  cooldown: 5,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  async execute(bot, message) {
    const data = await fetch(
      "https://nekobot.xyz/api/image?type=thigh"
    ).then((res) => res.json());

    const embed = bot.buildEmbed(message)
    .setImage(data.message);

    message.reply(embed);
  },
};
