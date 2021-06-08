module.exports = {
    name: "ban",
    category: "moderation",
    botPermissions: ["BAN_MEMBERS"],
    memberPermissions: ["BAN_MEMBERS"],
    async execute(bot, message, args) {
      const lang = await bot.getGuildLang(message.guild.id);
      const banMember = await bot.findMember(message, args);
      let banReason = args.slice(1).join(" ");
  
      if (!banMember) {
        return message.channel.send(lang.MEMBER.NOT_FOUND);
      }

      if (!banReason) banReason = lang.GLOBAL.NOT_SPECIFIED;
  
      if (!banMember.bannable) {
        return message.channel.send(lang.MEMBER.CANNOT_BE_BANNED);
      }
  
      if (message.guild.me.roles.highest.comparePositionTo(banMember.roles.highest) < 0) {
        return message.channel.send(
          lang.BOT.ROLE_MUST_BE_HIGHER.replace("{member}", bot.escapeMarkdown(banMember.username))
        );
      }
  
      banMember.ban({ reason: `${message.author.tag}: ${banReason}` });
      
      const embed = bot.buildEmbed(message)
      .setDescription(lang.MEMBER.BANNED.replace("{member}", bot.escapeMarkdown(banMember.username)))
      .addField(lang.GLOBAL.REASON, banReason);

      message.channel.send(embed);
    },
  };