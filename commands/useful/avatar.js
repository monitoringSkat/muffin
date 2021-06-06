module.exports = {
  name: "avatar",
  category: "useful",
  aliases: ["ava", "av"],
  cooldown: 2,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const member = bot.findMember(message, args, true);
    const avatar = member.user.displayAvatarURL({ format: "png", size: 2048, dynamic: true });

    const embed = bot.buildEmbed(message)
      .setTitle(lang.MEMBER.AVATAR.replace("{username}", bot.escapeMarkdown(member.user.username)))
      .setURL(avatar)
      .setImage(avatar);

    message.reply(embed);
  },
};
