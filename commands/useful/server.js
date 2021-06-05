module.exports = {
    name: "server",
    category: "useful",
    aliases: ["serverinfo", "si"],
    cooldown: 2,
    botPermissions: ["ATTACH_FILES", "EMBED_LINKS", "MANAGE_GUILD"],
    async execute(bot, message) {
        const lang = await bot.getGuildLang(message.guild.id);
        const guild = message.guild;
        const verificationLevel = lang.SERVER.LEVELS[guild.verificationLevel.toUpperCase()];
        const serverInvites = await guild.fetchInvites();
        const serverBans = await guild.fetchBans();

        const embed = bot.buildEmbed(message)
          .setTitle(bot.escapeMarkdown(guild.name))
          .setThumbnail(guild.iconURL({ dynamic: true }))
          .setDescription(`
          **${lang.SERVER.ID}:** ${guild.id}
          **${lang.SERVER.OWNER}:** ${bot.escapeMarkdown(guild.owner.user.tag)} (${guild.owner.user.id})
          **${lang.SERVER.VERIFICATION_LEVEL}:** ${verificationLevel}
          **${lang.SERVER.CREATION_DATE}:** ${bot.formatDate(guild.createdAt)}
          **${lang.SERVER.INVITES}:** ${serverInvites.size}
          **${lang.SERVER.BANS}:** ${serverBans.size}
          `)
          .addField(lang.SERVER.MEMBERS, `
          **${lang.SERVER.MEMBERS_TOTAL}:** ${guild.members.cache.size}
          **${lang.SERVER.HUMANS}:** ${guild.members.cache.filter((m) => !m.user.bot).size}
          **${lang.SERVER.BOTS}:** ${guild.members.cache.filter((m) => m.user.bot).size}
          `, true)
          .addField(lang.SERVER.STATUSES, `
          **${lang.MEMBER.STATUSES.ONLINE}:** ${guild.members.cache.filter((m) => m.presence.status === "online").size}
          **${lang.MEMBER.STATUSES.IDLE}:** ${guild.members.cache.filter((m) => m.presence.status === "idle").size}
          **${lang.MEMBER.STATUSES.DND}:** ${guild.members.cache.filter((m) => m.presence.status === "dnd").size}
          **${lang.MEMBER.STATUSES.OFFLINE}:** ${guild.members.cache.filter((m) => m.presence.status === "offline").size}
          `, true)
          .setImage(guild.bannerURL({ size: 2048, format: "png", dynamic: true }));

          // .addField(`**${lang.MEMBER.ROLES} (${roleCount}):**`, roles)
    
        message.channel.send(embed);
      },
  };
  