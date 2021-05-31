module.exports = {
  name: "volume",
  category: "music",
  aliases: ["vol"],
  cooldown: 2,
  botPermissions: ["ADD_REACTIONS"],
  async execute(bot, message, args) {
    const [newVol] = args;
    const lang = await bot.getGuildLang(message.guild.id);
    const userVoice = message.member.voice.channel;
    const botVoice = message.guild.me.voice.channel;
    const queue = await bot.player.getQueue(message);

    if (userVoice) {
      return message.channel.send(lang.MUSIC.MUST_BE_IN_VC);
    }

    if (botVoice && userVoice && userVoice !== botVoice) {
      return message.channel.send(lang.MUSIC.MUST_BE_IN_SAME_VC);
    }

    if (!bot.player.isPlaying(message) || !queue || newVol && !queue) {
      return message.channel.send(lang.MUSIC.EMPTY_QUEUE);
    }

    if (!newVol && queue) {
      return message.channel.send(lang.MUSIC.CURRENT_VOLUME
        .replace("{vol}", bot.player.queues.get(message.guild.id).volume));
    }

    if (isNaN(newVol)) {
      return message.channel.send(lang.OTHER.MUST_BE_A_NUMBER
        .replace("{args}", newVol));
    }

    if (newVol < 0 || newVol > 200) {
      return message.channel.send(lang.MUSIC.VOLUME_VALUE_LIMIT);
    }

    try {
      bot.player.setVolume(message, newVol);
      message.channel.send(lang.MUSIC.VOLUME_UPDATED
        .replace("{newVol}", newVol));
    } catch (e) {
      bot.sendErrorLog(bot, e, e?.type, e?.stack)
      message.channel.send(`${lang.GLOBAL.ERROR}\n\n\`\`\`${e.stack}\`\`\``);
    }
  },
};
