const { connect, connection } = require("mongoose");
const { mongodbUri } = require("../config.json");

(async function database() {
  const uri = mongodbUri;

  try {
    await connect(uri, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[DB] Connected to mongoDB!");
  } catch (e) {
    console.error(`[DB] ${e}`);
  }

  connection.on("disconnected", () => {
    console.log("[DB] Disconnected from mongoDB!");
  });
  connection.on("reconnected", () => {
    console.log("[DB] Reconnected to mongoDB!");
  });
})();
