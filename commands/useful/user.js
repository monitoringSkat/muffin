module.exports = {
    name: "user",
    category: "useful",
    aliases: ["userinfo", "u", "ui"],
    cooldown: 2,
    botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
    async execute(bot, message, args) {
        const lang = await bot.getGuildLang(message.guild.id);
        let member = await bot.findMember(message, args, true);

        const username = bot.escapeMarkdown(member.user.username);
        const tag = bot.escapeMarkdown(member.user.tag);
        const nickname = bot.escapeMarkdown(member.nickname);
        let title = `**${nickname}** | **${tag}**`;
        if (!nickname) title = tag;

        if (username === ":tada:" || nickname === ":tada:") {
          return message.react("🎉")
        }

        const status = lang.MEMBER.STATUSES[member.user.presence.status.toUpperCase()];
    
        const roles =
          member.roles.cache
            .filter((r) => r.id !== message.guild.id)
            .sort((a, b) => b.rawPosition - a.rawPosition)
            .map((r) => r)
            .join(", ") || lang.GLOBAL.NONE;
        const roleCount = member.roles.cache.filter((r) => r.id !== message.guild.id).size;
        
        const embed = bot.buildEmbed(message)
          .setTitle(title)
          .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
          .setDescription(`
          **${lang.MEMBER.STATUS}:** ${status}
          **${lang.MEMBER.ID}:** ${member.user.id}
          **${lang.MEMBER.CREATION_DATE}:** ${bot.formatDate(member.user.createdAt)}
          `)
          .addField(`**${lang.MEMBER.ROLES} (${roleCount}):**`, roles);
    
        message.channel.send(embed);
      },
  };
  