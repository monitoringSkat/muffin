const glob = require("glob");
const types = ["bot", "player"];

module.exports = function loadEvents(bot) {
  const eventFiles = glob.sync("./events/**/*.js");

  eventFiles.forEach((file) => {
    const event = require(`../${file}`);
    let type = "bot";

    types.forEach((t) => {
      if (file.includes(t)) {
        type = t;
      }
    });

    if (!event.execute) {
      throw console.error(`execute function is required for events! (${file})`);
    }

    if (!event.name) {
      throw console.error(`Name is required for events! (${file})`);
    }

    if (type === "player") {
      bot.player.on(event.name, event.execute.bind(null, bot));
    } else {
      bot.on(event.name, event.execute.bind(null, bot));
    }

    delete require.cache[require.resolve(`../${file}`)];
  });
};
