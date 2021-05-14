const glob = require("glob");

module.exports = function loadEvents(bot) {
  const eventFiles = glob.sync("./events/*.js");

  eventFiles.forEach((file) => {
    const event = require(`../${file}`);

    if (!event.execute) {
      throw new Error(`execute function is required for events! (${file})`);
    }

    if (!event.name) {
      throw new Error(`Name is required for events! (${file})`);
    }

    if (event.type === "player") {
      bot.player.on(event.name, event.execute.bind(null, bot));
    } else {
      bot.on(event.name, event.execute.bind(null, bot));
    }

    delete require.cache[require.resolve(`../${file}`)];
  });
};
