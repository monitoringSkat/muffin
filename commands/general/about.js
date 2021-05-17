const os = require("os");

module.exports = {
  name: "about",
  category: "general",
  aliases: ["bot", "botinfo", "info", "ping", "stats"],
  cooldown: 2,
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);
    const avatar = bot.user.displayAvatarURL({ dynamic: true });

    const embed = bot.buildEmbed(message)
      .setAuthor(`${bot.user.username} v${bot.package.version}`, avatar, `${bot.package.repository.url}/releases/tag/v${bot.package.version}`)
      .addField(lang.BOT.GENERAL_INFO,
        `
        **${lang.BOT.PLATFORM}**: ${os.type} (${os.arch})
        **${lang.BOT.LATENCY}**: ${bot.formatNumber(Math.round(bot.ws.ping))} ${lang.TIME.MILLISECONDS}
        **${lang.BOT.SHARDS}**: ${bot.formatNumber(bot.ws.totalShards)}
        **${lang.BOT.SERVERS}**: ${bot.formatNumber(bot.guilds.cache.size)}
        **${lang.BOT.USERS}**: ${bot.formatNumber(bot.users.cache.size)}
        **${lang.BOT.COMMANDS}**: ${bot.commands.filter((cmd) => cmd.category !== "botowner").size}
        **${lang.BOT.VOICE_CONNECTIONS}**: ${bot.formatNumber(bot.voice.connections.size)}
        `, true)
        
    message.channel.send(embed);
  },
};
