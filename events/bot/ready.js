module.exports = {
  name: "ready",
  execute(bot) {
    console.log(`[API] Succesfully authorized as ${bot.user.tag} (${bot.user.id})`);
    bot.user.setActivity(`v${bot.package.version}`, { type: "WATCHING" });
  },
};
