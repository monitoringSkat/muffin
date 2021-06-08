module.exports = {
    name: "server",
    category: "useful",
    aliases: ["serverinfo", "si"],
    cooldown: 2,
    botPermissions: ["ATTACH_FILES", "EMBED_LINKS", "MANAGE_GUILD"],
    async execute(bot, message) {
        const lang = await bot.getGuildLang(message.guild.id);
        const guild = message.guild;
        const serverOwner = await guild.fetchOwner();
        const verificationLevel = lang.SERVER.LEVELS[guild.verificationLevel.toUpperCase()];
        const serverInvites = await guild.fetchInvites();

        const embed = bot.buildEmbed(message)
          .setTitle(bot.escapeMarkdown(guild.name))
          .setThumbnail(guild.iconURL({ dynamic: true }))
          .setDescription(`
          ${guild.description ? bot.escapeMarkdown(guild.description) : lang.SERVER.NO_DESCRIPTION}

          **${lang.SERVER.ID}:** ${guild.id}
          **${lang.SERVER.OWNER}:** ${bot.escapeMarkdown(serverOwner.user.tag)} (${serverOwner.user.id})
          **${lang.SERVER.VERIFICATION_LEVEL}:** ${verificationLevel.charAt(0).toLowerCase() + verificationLevel.slice(1)}
          **${lang.SERVER.CREATION_DATE}:** ${bot.formatDate(guild.createdAt)}
          **${lang.SERVER.INVITES}:** ${serverInvites.size}
          **${lang.SERVER.BANS}:** ${guild.bans.cache.size}
          `)
          .addField(lang.SERVER.MEMBERS.MEMBERS, `
          **${lang.SERVER.MEMBERS.TOTAL}:** ${guild.members.cache.size}
          **${lang.SERVER.MEMBERS.HUMANS}:** ${guild.members.cache.filter((m) => !m.user.bot).size}
          **${lang.SERVER.MEMBERS.BOTS}:** ${guild.members.cache.filter((m) => m.user.bot).size}
          `, true)
          .addField(lang.SERVER.MEMBERS.STATUSES, `
          **${lang.MEMBER.STATUSES.ONLINE}:** ${guild.members.cache.filter((m) => m.presence.status === "online").size}
          **${lang.MEMBER.STATUSES.IDLE}:** ${guild.members.cache.filter((m) => m.presence.status === "idle").size}
          **${lang.MEMBER.STATUSES.DND}:** ${guild.members.cache.filter((m) => m.presence.status === "dnd").size}
          **${lang.MEMBER.STATUSES.OFFLINE}:** ${guild.members.cache.filter((m) => m.presence.status === "offline").size}
          `, true)
          .addField(lang.SERVER.BOOSTS.BOOSTS, `
          **${lang.SERVER.BOOSTS.COUNT}:** ${guild.premiumSubscriptionCount}
          **${lang.SERVER.BOOSTS.LEVEL}:** ${guild.premiumTier}
          `, true)
          .addField(lang.SERVER.CHANNELS.CHANNELS, `
          **${lang.SERVER.CHANNELS.TOTAL}:** ${guild.channels.cache.size}
          **${lang.SERVER.CHANNELS.TEXT}:** ${guild.channels.cache.filter((c) => c.type === "text").size}
          **${lang.SERVER.CHANNELS.VOICE}:** ${guild.channels.cache.filter((c) => c.type === "voice").size}

          `, true)
          .setImage(guild.bannerURL({ size: 2048, format: "png", dynamic: true }));

          // .addField(`**${lang.MEMBER.ROLES} (${roleCount}):**`, roles)
    
        message.reply(embed);
      },
  };
  