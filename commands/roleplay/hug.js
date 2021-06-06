const fetch = require("node-fetch");

module.exports = {
    name: "hug",
    category: "roleplay",
    cooldown: 5,
    botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
    async execute(bot, message, args) {
        const lang = await bot.getGuildLang(message.guild.id);
        const member = await bot.findMember(message, args, false);
        let action = `${lang.MEMBER.HUGS} ${bot.escapeMarkdown(member.user.tag)}`
        if (member.user.id === message.author.id || !member) {
            return message.reply(lang.MEMBER.CANT_HUG_YOURSELF)
        };
        const gif = await fetch(`https://nekos.life/api/v2/img/hug`)
            .then((res) => res.json());

        const embed = bot.buildEmbed(message)
        .setTitle(`${bot.escapeMarkdown(message.author.tag)} ${action}`)
        .setImage(gif.url);

        message.reply(embed);
    }
}