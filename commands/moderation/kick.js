module.exports = {
    name: "kick",
    description: "Kick a user",
    category: "admin",
    botPermissions: ["KICK_MEMBERS"],
    memberPermissions: ["KICK_MEMBERS"],
    async execute(bot, message, args) {
      const lang = await bot.getGuildLang(message.guild.id);
      const kickMember = await bot.findMember(message, args);
      let kickReason = args.slice(1).join(" ");
  
      if (!kickMember) {
        return message.channel.send(lang.MEMBER.NOT_FOUND);
      }
  
      if (!kickReason) kickReason = lang.GLOBAL.NOT_SPECIFIED;
  
      if (!kickMember.kickable) {
        return message.channel.send(lang.MEMBER.CANNOT_BE_KICKED);
      }
  
      if (message.guild.me.roles.highest.comparePositionTo(kickMember.roles.highest) < 0) {
        return message.channel.send(
          lang.BOT.ROLE_MUST_BE_HIGHER.replace("{member}", bot.escapeMarkdown(kickMember.username))
        );
      }
  
      kickMember.kick(`${message.author.tag}: ${kickReason}`);
      
      const embed = bot.buildEmbed(message)
      .setDescription(lang.MEMBER.KICKED.replace("{member}", bot.escapeMarkdown(banMember.username)))
      .addField(lang.GLOBAL.REASON, kickReason);

      message.channel.send(embed);
    },
  };
  