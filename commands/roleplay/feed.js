const fetch = require("node-fetch");

module.exports = {
    name: "feed",
    category: "roleplay",
    cooldown: 5,
    botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
    async execute(bot, message, args) {
        const lang = await bot.getGuildLang(message.guild.id);
        const member = await bot.findMember(message, args, true);
        let action = `${lang.MEMBER.FEEDS} ${bot.escapeMarkdown(member.user.tag)}`
        if (member.user.id === message.author.id || !member) {
            action = lang.MEMBER.FEEDS_THEMSELVES
        };
        const gif = await fetch(`https://nekos.life/api/v2/img/feed`)
            .then((res) => res.json());

        const embed = bot.buildEmbed(message)
        .setTitle(`${bot.escapeMarkdown(message.author.tag)} ${action}`)
        .setImage(gif.url);

        message.reply(embed);
    }
}