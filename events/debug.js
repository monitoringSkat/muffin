const { debug } = require("../config.json")

module.exports = {
  name: "debug",
  execute(bot, debug) {
    if(debug) {
      console.log(`[Debug] ${debug}`)
    }
  },
};
