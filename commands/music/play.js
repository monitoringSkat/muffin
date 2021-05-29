module.exports = {
  name: "play",
  category: "music",
  aliases: ["p"],
  cooldown: 2,
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const userVoice = message.member.voice.channel;
    const botVoice = message.guild.me.voice.channel;
    const search = args.join(" ");

    if (!search) {
      return message.channel.send(lang.MUSIC.PROVIDE_SEARCH);
    }

    if (!userVoice) {
      return message.channel.send(lang.MUSIC.MUST_BE_IN_VC);
    }

    if (botVoice && userVoice && userVoice !== botVoice) {
      return message.channel.send(lang.MUSIC.MUST_BE_IN_SAME_VC);
    }

    try {
      await bot.player.play(message, search, true);
    } catch (e) {
      bot.sendErrorLog(bot, e, e?.type, e?.stack)
      message.channel.send(`${lang.GLOBAL.ERROR}\n\n\`\`\`${e.stack}\`\`\``);
    }
  },
};
