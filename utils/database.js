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
    console.log("Connected to mongoDB!");
  } catch (e) {
    Logger.error("db", e);
  }

  connection.on("disconnected", () => {
    console.log("Disconnected from mongoDB!");
  });
  connection.on("reconnected", () => {
    console.log("Reconnected to mongoDB!");
  });
})();
