const StarboardsManager = require("discord-starboards");
const StarboardModel = require("../models/Starboard.model");

class MuffinStarboards extends StarboardsManager {
  async getAllStarboards() {
    return await StarboardModel.find();
  }

  async saveStarboard(data) {
    const giv = new StarboardModel(data);
    await giv.save();

    return true;
  }

  async deleteStarboard(channel_id, emoji) {
    await StarboardModel.findOneAndDelete({ channel_id, emoji });

    return true;
  }
}

module.exports = MuffinStarboards;
