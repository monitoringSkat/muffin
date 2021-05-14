const package = require("../package.json");

module.exports = {
  name: "ready",
  execute(bot) {
    console.log(`Succesfully authorized as ${bot.user.tag} (${bot.user.id})`);
    bot.user.setActivity(`v${package.version}`, { type: "WATCHING" });
  },
};
