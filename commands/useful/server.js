module.exports = {
    name: "server",
    category: "useful",
    aliases: ["serverinfo", "si"],
    cooldown: 2,
    botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
    async execute(bot, message) {
        const lang = await bot.getGuildLang(message.guild.id);
        const guild = message.guild;
        const verificationLevel = lang.SERVER.LEVELS[guild.verificationLevel.toUpperCase()];

        const embed = bot.buildEmbed(message)
          .setTitle(bot.escapeMarkdown(guild.name))
          .setThumbnail(guild.iconURL({ dynamic: true }))
          .setDescription(`
          **${lang.SERVER.ID}:** ${guild.id}
          **${lang.SERVER.OWNER}:** ${bot.escapeMarkdown(guild.owner.user.tag)} (${guild.owner.user.id})
          **${lang.SERVER.VERIFICATION_LEVEL}:** ${verificationLevel}
          **${lang.SERVER.CREATION_DATE}:** ${bot.formatDate(guild.createdAt)}
          `)
          .setImage(guild.bannerURL({ size: 2048, format: "png", dynamic: true }));

          // .addField(`**${lang.MEMBER.ROLES} (${roleCount}):**`, roles)
    
        message.channel.send(embed);
      },
  };
  