const User = require("../models/User.model");
const Guild = require("../models/Guild.model");
const dayjs = require("dayjs");
const { Message, MessageEmbed, Client, Util } = require("discord.js");
const { embedColor } = require("../config.json");
const fs = require("fs");

/**
 *
 * @param {string} userId
 * @param {string} guildId
 * @returns {{
 * user: {
 *  user_id: string;
 *  guild_id: string;
 * }
 */
async function getUserById(userId, guildId) {
  try {
    let user = await User.findOne({ user_id: userId, guild_id: guildId });

    if (!user) {
      user = await addUser(userId, guildId);
    }

    return {
      user,
    };
  } catch (e) {
    console.error(e);
  }
}

/**
 * Add a user to the database
 * @param {string} userId
 * @param {string} guildId
 */
async function addUser(userId, guildId) {
  try {
    const user = new User({ user_id: userId, guild_id: guildId });

    await user.save();

    return user;
  } catch (e) {
    console.error(e);
  }
}

/**
 * Updates user information
 * @param {string} userId Id of the user
 * @param {string} guildId Id of the guild
 * @param {object} data updated data object
 */
async function updateUserById(userId, guildId, data) {
  try {
    if (typeof data !== "object") {
      throw Error("\"data\" must be an object");
    }

    const user = await getUserById(userId, guildId);

    if (!user) {
      await addUser(guildId);
    }

    await User.findOneAndUpdate({ user_id: userId, guild_id: guildId }, data);
  } catch (e) {
    console.error(e);
  }
}

/**
 *
 * @param {string} userId
 * @param {string} guildId
 */
async function removeUser(userId, guildId) {
  try {
    await User.findOneAndDelete({ user_id: userId, guild_id: guildId });
  } catch (e) {
    console.error(e);
  }
}

/**
 * @param {string} guildId
 */
async function getGuildById(guildId) {
  try {
    let guild = await Guild.findOne({ guild_id: guildId });

    if (!guild) {
      guild = await addGuild(guildId);
    }

    return guild;
  } catch (e) {
    console.error(e);
  }
}

/**
 * @param {string} guildId
 * @param {object} settings
 */
async function updateGuildById(guildId, settings) {
  try {
    if (typeof settings !== "object") {
      throw Error("\"settings\" must be an object");
    }

    // check if guild exists
    const guild = await getGuildById(guildId);

    if (!guild) {
      await addGuild(guildId);
    }

    await Guild.findOneAndUpdate({ guild_id: guildId }, settings);
  } catch (e) {
    console.error(e);
  }
}

/**
 * @param {string} guildId
 */
async function addGuild(guildId) {
  try {
    const guild = new Guild({ guild_id: guildId });

    await guild.save();

    return guild;
  } catch (e) {
    console.error(e);
  }
}

/**
 * @param {string} guildId
 */
async function removeGuild(guildId) {
  try {
    await Guild.findOneAndDelete({ guild_id: guildId });
  } catch (e) {
    console.error(e);
  }
}

/**
 * @param {Message} message
 * @param {string[]} args
 * @param {Boolean} allowAuthor
 */
function findMember(message, args, allowAuthor) {
  return message.guild.member(
    message.mentions.users.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find((m) => m.user.id === args[0]) ||
      message.guild.members.cache.find((m) => m.user.tag === args[0]) ||
      (allowAuthor === true ? message.member : null)
  );
}

/**
 * @param {string} guildId
 * @returns {Object} The found language
 */
async function getGuildLang(guildId) {
  try {
    const guild = await getGuildById(guildId);

    return require(`../locales/${guild?.locale || "en_gb"}`);
  } catch (e) {
    console.error(e);
  }
}

/**
 * @param {import("discord.js").Client} bot
 * @param {"warning" | "error"} type
 * @param {?string} msgContent
 */
function sendErrorLog(bot, error, type, msgContent) {
  const channel = bot.channels.cache.get(bot.config.errorLogsChannelId);
  if (!channel || !bot.config.errorLogsChannelId) {
    return console.error("UNHANDLED ERROR", error);
  }

  const message = {
    author: bot.user,
  };

  const name = error.name || "N/A";
  const code = error.code || "N/A";
  const httpStatus = error.httpStatus || "N/A";
  let stack = error.stack || error;
  const content = msgContent || "N/A";

  if (stack.length >= 2048) {
    console.error(stack);
    stack = "An error occurred but was too long to send to Discord, check your console.";
  }

  const embed = bot.buildEmbed(message)
    .setTitle("An error occurred")
    .addField("Name", name, true)
    .addField("Code", code, true)
    .addField("httpStatus", httpStatus, true)
    .addField("Command executed", content, true)
    .setDescription(`\`\`\`${stack}\`\`\` `)
    .setColor(type === "error" ? "RED" : "ORANGE");

  channel.send(embed);
  console.log(`[ERROR] ${stack}`)
}

/**
 * @param {number | string} date
 * @returns {string}
 */
const formatDate = (date) => dayjs(date).format("DD.MM.YYYY, HH:mm:ss");

/**
 * @param {string} str
 * @returns {string}
 */
const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


function formatNumber(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

/**
 * @param {Message} message
 */
function buildEmbed(message) {
  if (!message) {
    throw Error("\"message\" must be passed down as param! (bot.buildEmbed)");
  }

  const avatar = message.author.displayAvatarURL({ dynamic: true });
  return new MessageEmbed()
    .setFooter(escapeMarkdown(message.author.tag), avatar)
    .setColor(embedColor)
    .setTimestamp();
}

/**
 * @param {string} str
 * @returns {string}
 */
 function escapeMarkdown(string) {
  if(!string) throw new Error("no string provided! (bot.escapeMarkdown)")
  else return Util.escapeMarkdown(string, {
      codeBlock: true,
       spoiler: true,
       inlineCode: true,
       inlineCodeContent: true,
       codeBlockContent: true,
    });
}

/**
 *
 * @param {import("discord.js").Client} bot
 * @param {import("discord.js").Channel} channel
 * @param {Object} options
 * @param {String} deleteOld
 */
async function createStarboard(bot, channel, options, deleteOld) {
  if (deleteOld) {
    bot.starboards.delete(deleteOld);
  }

  await bot.starboards.create(channel, {
    ...options,
    selfStar: true,
    starEmbed: true,
    attachments: true,
    resolveImageUrl: true,
  });
}

module.exports = {
  functions: [
  sendErrorLog,
  formatDate,
  toCapitalize,
  getUserById,
  addGuild,
  addUser,
  removeUser,
  updateUserById,
  getGuildById,
  updateGuildById,
  removeGuild,
  findMember,
  formatNumber,
  buildEmbed,
  escapeMarkdown,
  createStarboard,
  getGuildLang
  ]
};
