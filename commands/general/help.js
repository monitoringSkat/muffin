module.exports = {
  name: "help",
  category: "general",
  aliases: ["h"],
  cooldown: 2,
  botPermissions: ["EMBED_LINKS"],
  async execute(bot, message, args) {
    const lang = await bot.getGuildLang(message.guild.id);
    const guild = await bot.getGuildById(message.guild.id);
    const prefix = guild.prefix;
    const cmdArgs = args[0];
    const nsfw = message.channel.nsfw;
    const categories = await require("fs").readdirSync("../");

    if (cmdArgs) {
      const cmd =
        bot.commands.get(cmdArgs) || bot.commands.get(bot.aliases.get(cmdArgs));
      if (!cmd || cmd.category === "owner" && !bot.config.owners.includes(message.author.id)) {
        return message.reply(lang.HELP.CMD_NOT_FOUND);
        }

      const description = lang.DESCRIPTIONS[cmd.name.toUpperCase()] || lang.HELP.NO_DESCRIPTION;
      const aliases = cmd.aliases
        ? cmd.aliases.map((alias) => `\`${alias}\``).join(", ")
        : lang.GLOBAL.NONE;
      const cooldown = cmd.cooldown ? `${cmd.cooldown} ${lang.TIME.SECONDS}` : lang.GLOBAL.NONE;
      const usage = cmd.usage ? `${prefix}${cmd.name} ${cmd.usage}` : lang.GLOBAL.NOT_SPECIFIED;
      const memberPerms = !cmd.memberPermissions
        ? ["SEND_MESSAGES"].map((p) => lang.PERMISSIONS[p.toUpperCase()])
        : [...cmd.memberPermissions, "SEND_MESSAGES"].map((p) => lang.PERMISSIONS[p.toUpperCase()]);
      const botPerms = !cmd.botPermissions
        ? ["SEND_MESSAGES"].map((p) => lang.PERMISSIONS[p.toUpperCase()])
        : [...cmd.botPermissions, "SEND_MESSAGES"].map((p) => lang.PERMISSIONS[p.toUpperCase()]);

      const embed = bot.buildEmbed(message)
        .setTitle(`\`${cmd.name}\``)
        .setDescription(description)
        .addField(lang.HELP.CATEGORY, lang.HELP[cmd.category.toUpperCase().toString()], true)
        .addField(lang.HELP.COOLDOWN, cooldown, true)
        .addField(lang.HELP.ALIASES, aliases)
        .addField(lang.HELP.USAGE, usage)
        .addField(lang.HELP.BOT_PERMS, botPerms.join("\n"), true)
        .addField(lang.HELP.MEMBER_PERMS, memberPerms.join("\n"), true);

      return message.reply(embed);
    }

    const commands = bot.commands;

    const generalCmds = commands
      .filter(({ category }) => category === "general")
      .map(({ name }) => `\`${name}\``)
      .join(", ") || lang.GLOBAL.NOTHING;
    const roleplayCmds = commands
      .filter(({ category }) => category === "roleplay")
      .map(({ name }) => `\`${name}\``)
      .join(", ") || lang.GLOBAL.NOTHING;
    const musicCmds = commands
      .filter(({ category }) => category === "music")
      .map(({ name }) => `\`${name}\``)
      .join(", ") || lang.GLOBAL.NOTHING;
    const nsfwCmds = commands
      .filter(({ category }) => category === "nsfw")
      .map(({ name }) => `\`${name}\``)
      .join(", ") || lang.GLOBAL.NOTHING;
    const usefulCmds = commands
      .filter(({ category }) => category === "useful")
      .map(({ name }) => `\`${name}\``)
      .join(", ") || lang.GLOBAL.NOTHING;
    const settingsCmds = commands
      .filter(({ category }) => category === "settings")
      .map(({ name }) => `\`${name}\``)
      .join(", ") || lang.GLOBAL.NOTHING;

    const embed = bot.buildEmbed(message)
      .addField(lang.HELP.GENERAL, generalCmds)
      .addField(lang.HELP.MUSIC, musicCmds)
      .addField(lang.HELP.USEFUL, usefulCmds);
    if (nsfw) {
       embed.addField(lang.HELP.NSFW, nsfwCmds);
     } else {
       embed.addField(lang.HELP.NSFW, lang.HELP.NSFW_ONLY);
       }
    embed
      .addField(lang.HELP.ROLEPLAY, roleplayCmds)
      .addField(lang.HELP.SETTINGS, settingsCmds)
      .setDescription(lang.HELP.HELP_DESC.replace("{prefix}", prefix))
      .setTitle(lang.HELP.HELP);

    message.reply(embed);
  },
};
