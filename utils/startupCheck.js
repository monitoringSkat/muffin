const config = require("../config.json");
const v = require("../package.json").engines.node.slice(2);

function startupCheck() {

  if (process.versions.node < v) {
    throw new Error(`your node.js version is outdated! Please use v${v} or later`);
  }

  if (!config) {
    throw new Error("config file is missing! Make sure you've executed install.sh")
  }

  if (!config.token || config.token === "") {
    throw new Error("bot token is missing!");
  }

  if (!config.mongodbUri || config.mongodbUri === "") {
    throw new Error("mongoDB URI is missing!");
  }

  if (!config.owners[0]) {
    throw new Error("ownerId is missing!");
  }

  if (!config.errorLogsChannelId || config.errorLogsChannelId === "") {
    console.warn("[Warning] errorLogsChannelId is required for reporting any errors, but was not found in the config");
  }

  if (!config.embedColor || config.embedColor === "") {
    throw new Error("embedColor is missing!");
  }

  if (!config.serverUri|| config.serverUri === "") {
    console.warn("[Warning] serverUri is missing. It is completely optional but you may want to provide it.");
  }

  if (!config.permissionsInteger || config.permissionsInteger === "") {
    throw new Error("permissions integer is missing!")
  }

}

module.exports = startupCheck;
